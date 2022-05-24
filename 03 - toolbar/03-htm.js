/**
 * Tutorial 03 - Custom Toolbar
 *
 * Check out the README in this folder for details
 */
/* eslint-disable indent */
(() => {
  const html = window.htm.bind(window.wp.element.createElement);
  const { registerBlockType } = window.wp.blocks;
  const { RichText, MediaUpload, BlockControls, AlignmentToolbar } = window.wp.blockEditor;
  const { Button, ToolbarGroup, ToolbarButton } = window.wp.components;

  registerBlockType('my/tut-03', {
    title: '03 - Custom Toolbar',
    icon: 'book',
    category: 'layout',
    example: {},

    attributes: {
      // Attributes for toolbar
      align: { type: 'string', default: 'none' },
      imagePosition: { type: 'string', default: 'right' },

      // The rests are the same as Tut 02
      title: { type: 'array', source: 'children', selector: 'h2' },
      mediaID: { type: 'number' },
      mediaURL: { type: 'string', source: 'attribute', selector: 'img', attribute: 'src' },
      ingredients: { type: 'array', source: 'children', selector: '.ingredients' },
      steps: { type: 'array', source: 'children', selector: '.steps' },
    },

    //
    edit: (props) => {
      const atts = props.attributes;

      return html`
        <div className="${props.className} image-${atts.imagePosition} has-text-align-${atts.align}">

          <!-- BlockControls will be added to the toolbar -->
          <${BlockControls}>
            <${ToolbarGroup}>
              <${ToolbarButton} 
                icon="align-right"
                title="Image on Right"
                className=${atts.imagePosition === 'right' ? 'is-pressed' : ''}
                onClick=${() => {
                  props.setAttributes({ imagePosition: 'right' });
                }}
              />
              <${ToolbarButton}
                icon="align-left"
                title="Image on Left"
                className=${atts.imagePosition === 'left' ? 'is-pressed' : ''}
                onClick=${() => {
                  props.setAttributes({ imagePosition: 'left' });
                }}
              />
            <//>
            <${AlignmentToolbar}
              value=${atts.align}
              onChange=${(value) => {
                props.setAttributes({ align: value || 'none' });
              }}
            />
          <//>
          
          <!-- The rests are the same as Tut 02 -->
          <${RichText}
            tagName="h2"
            inline="true"
            placeholder="Write recipe title…"
            value=${atts.title}
            onChange=${(value) => {
              props.setAttributes({ title: value });
            }}
          />
          <figure>
            <${MediaUpload}
              allowedTypes="image"
              value=${atts.mediaID}
              onSelect=${(media) => {
                props.setAttributes({ mediaURL: media.url, mediaID: media.id });
              }}
              render=${(obj) => {
                const className = atts.mediaID ? 'button button--transparent' : 'button';
                const buttonContent = atts.mediaID
                  ? html`<img src=${atts.mediaURL} alt="" />`
                  : 'Upload Image';

                return html`
                  <${Button} className=${className} onClick=${obj.open}>
                    ${buttonContent}
                  <//>
                `;
              }}
            />
          </figure>
          <h3>Ingredients</h3>
          <${RichText}
            value=${atts.ingredients}
            tagName="ul"
            multiline="li"
            className="ingredients"
            placeholder="Write a list of ingredients…"
            onChange=${(value) => {
              props.setAttributes({ ingredients: value });
            }}
          />
          <h3>Steps</h3>
          <${RichText}
            value="${atts.steps}"
            tagName="div"
            multiline="p"
            inline="false"
            placeholder="Write instructions…"
            onChange=${(value) => {
              props.setAttributes({ steps: value });
            }}
          />
        </div>
      `;
    },

    //
    save: (props) => {
      const atts = props.attributes;

      // Add extra class name based on selected toolbar
      return html`
        <div className="image-${atts.imagePosition} has-text-align-${atts.align}">
          
          <!-- The rests are the same as Tut 02 -->
          <${RichText.Content}
            value=${atts.title}
            tagName="h2"
          />
          ${atts.mediaURL && html`
            <figure>
              <img src=${atts.mediaURL} alt="" />
            </figure>
          `}
          <h3>Ingredients</h3>
          <${RichText.Content}
            value=${atts.ingredients}
            tagName="ul"
            className="ingredients"
          />

          <h3>Instructions</h3>
          <${RichText.Content}
            value=${atts.steps}
            tagName="div"
            className="steps"
          />
        </div>
      `;
    },
  });
})();

/**
* That's all folks!
* If you spot a mistake or want to request a topic, let me know in https://github.com/hrsetyono/gutenberg-tutorial/issues
*/
