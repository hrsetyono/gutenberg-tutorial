/**
 * Tutorial 06b - Converting Static to Dynamic Block
 *
 * Check out the README in this folder for details
 */
/* eslint-disable indent */
(() => {
  const html = window.htm.bind(window.wp.element.createElement);
  const { registerBlockType } = window.wp.blocks;
  const { RichText, MediaUpload } = window.wp.blockEditor;
  const { Button } = window.wp.components;

  registerBlockType('my/tut-06b', {
    title: '06b - Static to Dynamic Block',
    description: 'This block is rendered via PHP',
    icon: 'book',
    category: 'layout',
    example: {},
    // Removed all 'source' so the attribute is saved as HTML Comment
    attributes: {
      title: { type: 'string' }, // RichText become string instead of array
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
      return html`
        <div className=${props.className}>
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

    /**
     * Returns nothing because this is dynamic block and will be rendered via PHP
     */
    save: () => null,
  });
})();

/**
 * That's all folks!
 * If you spot a mistake or want to request a topic, let me know in https://github.com/hrsetyono/gutenberg-tutorial/issues
 */
