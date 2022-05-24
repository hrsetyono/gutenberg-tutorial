/**
 * Tutorial 02 - Multiple Fields
 *
 * Check out the README in this folder for details
 */

import './02.css';
import { registerBlockType } from '@wordpress/blocks';
import { RichText, MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

registerBlockType('my/tut-02', {
  title: '02 - Multiple Fields',
  icon: 'book',
  category: 'layout',
  example: {},
  attributes: {
    // Extract title from <h2>
    title: {
      type: 'array',
      source: 'children',
      selector: 'h2',
    },
    // since there's no source, this attribute will be saved as JSON comment like this:
    // <!-- { mediaID: 10 } -->
    mediaID: {
      type: 'number',
    },
    // Extract mediaURL from the `src` attribute of <img>
    mediaURL: {
      type: 'string',
      source: 'attribute',
      selector: 'img',
      attribute: 'src',
    },
    // Extract ingredients from the children of class `ingredients`
    ingredients: {
      type: 'array',
      source: 'children',
      selector: '.ingredients',
    },
    steps: {
      type: 'array',
      source: 'children',
      selector: '.steps',
    },
  },

  // Define how to render the content in Editor
  edit: (props) => {
    const atts = props.attributes;

    /**
     * First, imagine how you want the HTML output to be.
     *
     * For this tutorial, we want it like this:
     *
     *   <div class="wp-block-my-tut02">
     *     <h2> Title </h2>
     *     <figure> <img /> </figure>
     *     <h3> Ingredients </h3>
     *     <ul>
     *       <li> ... </li>
     *       <li> ... </li>
     *     </ul>
     *     <h3> Steps </h3>
     *     <div>
     *       <p> ... </p>
     *       <p> ... </p>
     *     </div>
     *   </div>
     *
     * Now we need to translate it to React:
     */
    return (
      <div className={props.className}>
        <RichText
          value={atts.title}
          tagName="h2"
          inline="true"
          placeholder="Write Recipe title…"
          onChange={(value) => {
            props.setAttributes({ title: value });
          }}
        />

        <figure>
          <MediaUpload
            value={atts.mediaID}
            allowedTypes="image"
            onSelect={(media) => {
              props.setAttributes({ mediaURL: media.url, mediaID: media.id });
            }}
            // Create a button that opens media library when clicked
            render={(obj) => {
              const className = atts.mediaID ? 'button button--transparent' : 'button';

              // If Image ID exists, show <img>, otherwise show a text to upload imge.
              const buttonContent = atts.mediaID
                ? <img src={atts.mediaURL} alt="" />
                : 'Upload Image';

              return (
                <Button
                  className={className}
                  onClick={obj.open}
                >
                  { buttonContent }
                </Button>
              );
            }}
          />
        </figure>

        {/* Static H3 with the text 'Ingredients' */}
        <h3> Ingredients </h3>

        {/* Create a RichText with UL as wrapper and all its children uses LI */}
        <RichText
          value={atts.ingredients}
          tagName="ul"
          multiline="li"
          className="ingredients"
          placeholder="Write a list of ingredients…"
          onChange={(value) => {
            props.setAttributes({ ingredients: value });
          }}
        />

        {/* Another static H3 */}
        <h3> Steps </h3>

        {/* Create a RichText with DIV as wrapper */}
        <RichText
          value={atts.steps}
          tagName="div"
          multiline="p"
          inline="false"
          placeholder="Write instructions…"
          onChange={(value) => {
            props.setAttributes({ steps: value });
          }}
        />
      </div>
    );
  },

  // Define what to save in Database
  // This saved HTML will be used for extracting the attributes
  save: (props) => {
    const atts = props.attributes;

    return (
      <div>
        <RichText.Content
          tagName="h2"
          value={atts.title}
        />
        {/* If Image is set */}
        { atts.mediaURL && (
          <figure>
            <img src={atts.mediaURL} alt="" />
          </figure>
        )}

        <h3> Ingredients </h3>
        <RichText.Content
          value={atts.ingredients}
          tagName="ul"
          className="ingredients"
        />

        <h3> Instructions </h3>
        <RichText.Content
          value={atts.steps}
          tagName="div"
          className="steps"
        />
      </div>
    );
  },
});

/**
* That's all folks!
* If you spot a mistake or want to request a topic, let me know in https://github.com/hrsetyono/gutenberg-tutorial/issues
*/
