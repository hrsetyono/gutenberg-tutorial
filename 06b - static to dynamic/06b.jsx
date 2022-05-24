/**
 * Tutorial 06b - Converting Static to Dynamic Block
 *
 * Check out the README in this folder for details
 */
import './06b.css';
import { registerBlockType } from '@wordpress/blocks';
import { RichText, MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

registerBlockType('my/tut-06b', {
  title: '06b - Static to Dynamic',
  icon: 'book',
  category: 'layout',
  example: {},

  // Removed all 'source' param so the attribute is saved to the database
  attributes: {
    title: { type: 'string' },
    mediaID: { type: 'number' },
    mediaURL: { type: 'string' },
    ingredients: { type: 'string' },
    steps: { type: 'string' },
  },

  /**
   * This edit() is exactly the same as Tut 02
   */
  edit: (props) => {
    const atts = props.attributes;

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
            render={(obj) => {
              const className = atts.mediaID ? 'button button--transparent' : 'button';
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

        <h3> Ingredients </h3>
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

        <h3> Steps </h3>
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

  /**
   * Returns nothing because this is dynamic block and will be rendered via PHP
   */
  save: () => null,
});

/**
* That's all folks!
* If you spot a mistake or want to request a topic, let me know in https://github.com/hrsetyono/gutenberg-tutorial/issues
*/
