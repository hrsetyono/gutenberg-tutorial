/**
 * Tutorial 03 - Custom Toolbar
 *
 * Check out the README in this folder for details
 */
 (() => {
  const el = window.wp.element.createElement;
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
      return [
        // If BlockControls is returned, it will be added to the toolbar
        el(
          BlockControls,
          {},
          // Image position toolbar
          el(
            ToolbarGroup,
            {},
            el(ToolbarButton, {
              icon: 'align-right', // Icon list https://developer.wordpress.org/resource/dashicons/
              title: 'Image on Right',
              className: atts.imagePosition === 'right' ? 'is-pressed' : '', // active state for the buttons
              onClick: () => {
                props.setAttributes({ imagePosition: 'right' });
              },
            }),

            el(ToolbarButton, {
              icon: 'align-left',
              title: 'Image on Left',
              className: atts.imagePosition === 'left' ? 'is-pressed' : '',
              onClick: () => {
                props.setAttributes({ imagePosition: 'left' });
              },
            }),
          ),

          // Text alignment toolbar
          el(AlignmentToolbar, {
            value: atts.align,
            onChange: (value) => {
              props.setAttributes({ align: value || 'none' });
            },
          }),
        ),

        // BODY
        // add extra class name based on selected toolbar
        el(
          'div',
          { className: `${props.className} image-${atts.imagePosition} has-text-align-${atts.align}` },

          // The rests are the same as Tut 02
          el(RichText, {
            tagName: 'h2',
            inline: true,
            placeholder: 'Write Recipe title…',
            value: atts.title,
            onChange: (value) => {
              props.setAttributes({ title: value });
            },
          }),

          el(
            'figure',
            {},
            el(MediaUpload, {
              allowedTypes: 'image',
              value: atts.mediaID,
              onSelect: (media) => {
                props.setAttributes({
                  mediaURL: media.url,
                  mediaID: media.id,
                });
              },
              render: (obj) => {
                const className = atts.mediaID ? 'button button--transparent' : 'button';
                const buttonContent = atts.mediaID
                  ? el('img', { src: atts.mediaURL })
                  : 'Upload Image';

                return el(
                  Button,
                  { className, onClick: obj.open },
                  buttonContent,
                );
              },
            }),
          ),

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

    //
    save: (props) => {
      const atts = props.attributes;

      // Add extra class name based on selected toolbar
      return el(
        'div',
        { className: `image-${atts.imagePosition} has-text-align-${atts.align}` },

        // The rests are the same as Tut 02
        el(RichText.Content, {
          tagName: 'h2',
          value: atts.title,
        }),
        atts.mediaURL && el(
          'figure',
          {},
          el('img', { src: atts.mediaURL }),
        ),

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
