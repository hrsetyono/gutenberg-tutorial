/**
 * Tutorial 04 - Custom Inspector
 *
 * Check out the README in this folder for details
 */
/* eslint-disable indent */
(() => {
  const html = window.htm.bind(window.wp.element.createElement);
  const { registerBlockType } = window.wp.blocks;
  const { RichText, MediaUpload, InspectorControls, PanelColorSettings } = window.wp.blockEditor;
  const { Button, TextControl, ToggleControl, PanelBody } = window.wp.components;

  registerBlockType('my/tut-04', {
    title: '04 - Custom Inspector',
    icon: 'book',
    category: 'layout',
    example: {},

    //
    attributes: {
      // attributes for inspector
      bgColor: { type: 'string', default: 'transparent' },
      textColor: { type: 'string', default: 'inherit' },
      recipeLabel: { type: 'string', default: 'NEW', source: 'children', selector: 'label' },
      hasImage: { type: 'boolean', default: true },

      // The rests are the same as Tut 02
      title: { type: 'array', source: 'children', selector: 'h2' },
      mediaID: { type: 'number' },
      mediaURL: { type: 'string', source: 'attribute', selector: 'img', attribute: 'src' },
      ingredients: { type: 'array', source: 'children', selector: '.ingredients' },
      steps: { type: 'array', source: 'children', selector: '.steps' },

    },

    edit: (props) => {
      const atts = props.attributes;

      return html`
        <div
          className=${props.className}
          style=${{ '--bgColor': atts.bgColor, '--textColor': atts.textColor }}
        >
          <!-- InspectorControls will be added to the sidebar -->
          <${InspectorControls}>
            <${PanelBody} title="Settings" initialOpen="true">
              <${TextControl}
                value=${atts.recipeLabel}
                label="Recipe Label"
                onChange=${(value) => {
                  props.setAttributes({ recipeLabel: value });
                }}
              />
              <${ToggleControl}
                label="Has Image?"
                checked=${atts.hasImage}
                onChange=${(value) => {
                  props.setAttributes({ hasImage: value });
                }}
              />
            <//>
  
            <${PanelColorSettings}
              title="Color"
              initialOpen="true"
              colorSettings=${[
                // Background color will use palette specified in `add_theme_support( 'editor-color-palette' )`
                {
                  label: 'Background Color',
                  value: atts.bgColor,
                  disableCustomColors: true,
                  onChange: (value) => {
                    props.setAttributes({ bgColor: value || 'transparent' });
                  },
                },
                // We override the palette by adding `colors` argument.
                {
                  label: 'Text Color',
                  value: atts.textColor,
                  disableCustomColors: false,
                  colors: [
                    { name: 'Black', slug: 'red-light', color: '#333' },
                    { name: 'Gray', slug: 'green-light', color: '#888' },
                    { name: 'White', slug: 'blue-light', color: '#fff' },
                  ],
                  onChange: (value) => {
                    props.setAttributes({ textColor: value || 'transparent' });
                  },
                },
              ]}
            />
          </InspectorControls>
  
          <!-- Create the label we specified in Sidebar -->
          ${atts.recipeLabel && html`
            <label>
              ${atts.recipeLabel}
            </label>
          `}
  
          <${RichText}
            value=${atts.title}
            tagName="h2"
            inline="true"
            placeholder="Write Recipe title…"
            onChange=${(value) => {
              props.setAttributes({ title: value });
            }}
          />
  
          <!-- Add conditional check whether to show or hide the Figure -->
          ${atts.hasImage && html`
            <figure>
              <${MediaUpload}
                value=${atts.mediaID}
                allowedTypes="image"
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
                    </${Button}>
                  `;
                }}
              />
            </figure>
          `}
  
          <!-- The rests are the same as Tut 02 -->
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

    save: (props) => {
      const atts = props.attributes;

      return html`
        <div style=${{ '--bgColor': atts.bgColor, '--textColor': atts.textColor }}>
  
          <!-- Create the label we specified in Sidebar -->
          ${atts.recipeLabel && html`
            <label>
              ${atts.recipeLabel}
            </label>
          `}
  
          <${RichText.Content}
            value=${atts.title}
            tagName="h2"
          />

          <!-- Add conditional check whether to show or hide the Figure -->
          ${(atts.mediaURL && atts.hasImage) && html`
            <figure>
              <img src=${atts.mediaURL} alt="" />
            </figure>
          `}

          <!-- The rests are the same as Tut 02 -->
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
