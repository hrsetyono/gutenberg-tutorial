/**
 * Tutorial 04 - Custom Inspector
 *
 * Check out the README in this folder for details
 */
(() => {
  const el = window.wp.element.createElement;
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

      return [
        // If InspectorControls is returned, it will be added to the sidebar
        el(
          InspectorControls,
          {},
          el(
            PanelBody,
            { title: 'Settings', initialOpen: true },
            // Input Text
            el(TextControl, {
              label: 'Recipe Label',
              value: atts.recipeLabel,
              onChange: (value) => {
                props.setAttributes({ recipeLabel: value });
              },
            }),
            // On Off Switch
            el(ToggleControl, {
              label: 'Has Image?',
              checked: atts.hasImage,
              onChange: (value) => {
                props.setAttributes({ hasImage: value });
              },
            }),
          ),

          el(PanelColorSettings, {
            title: 'Color',
            initialOpen: true,
            colorSettings: [
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
                  props.setAttributes({ textColor: value || 'inherit' });
                },
              },
            ],
          }),
        ),
        // BODY
        el(
          'div',
          {
            className: props.className,
            style: { // Add the colors as CSS Variable
              '--bgColor': atts.bgColor,
              '--textColor': atts.textColor,
            },
          },

          // Create the label we specified in Sidebar
          el(
            'label',
            { className: atts.recipeLabel ? '' : 'hidden' },
            atts.recipeLabel,
          ),

          el(RichText, {
            tagName: 'h2',
            inline: true,
            placeholder: 'Write Recipe title…',
            value: atts.title,
            onChange: (value) => {
              props.setAttributes({ title: value });
            },
          }),

          // Add conditional check whether to show or hide the Figure
          (atts.hasImage
            && el(
              'figure',
              {},
              el(MediaUpload, {
                allowedTypes: 'image',
                value: atts.mediaID,
                onSelect: (media) => {
                  props.setAttributes({ mediaURL: media.url, mediaID: media.id });
                },
                render: (obj) => {
                  const className = atts.mediaURL ? 'button button--transparent' : 'button';
                  const buttonContent = atts.mediaURL
                    ? el('img', { src: atts.mediaURL })
                    : 'Upload Image';
                  return el(
                    Button,
                    { className, onClick: obj.open },
                    buttonContent,
                  );
                },
              }),
            )
          ),

          // The rests are the same as Tut 02
          el('h3', {}, 'Ingredients'),
          el(RichText, {
            tagName: 'ul',
            multiline: 'li',
            placeholder: 'Write a list of ingredients…',
            className: 'ingredients',
            value: atts.ingredients,
            onChange: (value) => {
              props.setAttributes({ ingredients: value });
            },
          }),

          el('h3', {}, 'Steps'),
          el(RichText, {
            tagName: 'div',
            multiline: 'p',
            inline: false,
            placeholder: 'Write instructions…',
            value: atts.steps,
            onChange: (value) => {
              props.setAttributes({ steps: value });
            },
          }),
        ),
      ];
    },

    save: (props) => {
      const atts = props.attributes;

      return el(
        'div',
        {
          // Add the colors as CSS Variable
          style: { '--bgColor': atts.bgColor, '--textColor': atts.textColor },
        },
        // Create the label we specified in Sidebar
        atts.recipeLabel && el('label', {}, atts.recipeLabel),

        el(RichText.Content, { tagName: 'h2', value: atts.title }),

        // One extra condition for the image to appear
        (atts.mediaURL && atts.hasImage)
          && el(
            'figure',
            {},
            el('img', { src: atts.mediaURL }),
          ),

        // The rests are the same as Tut 02
        el('h3', {}, 'Ingredients'),
        el(RichText.Content, {
          tagName: 'ul',
          className: 'ingredients',
          value: atts.ingredients,
        }),

        el('h3', {}, 'Instructions'),
        el(RichText.Content, {
          tagName: 'div',
          className: 'steps',
          value: atts.steps,
        }),
      );
    },

  });
})();

/**
* That's all folks!
* If you spot a mistake or want to request a topic, let me know in https://github.com/hrsetyono/gutenberg-tutorial/issues
*/
