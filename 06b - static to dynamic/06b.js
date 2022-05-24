/**
 * Tutorial 06b - Converting Static to Dynamic Block
 *
 * Check out the README in this folder for details
 */
(() => {
  const el = window.wp.element.createElement;
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
      return el(
        'div',
        { className: props.className },

        // Heading
        el(RichText, {
          tagName: 'h2',
          inline: true,
          placeholder: 'Write Recipe title…',
          value: atts.title,
          onChange: (value) => {
            props.setAttributes({ title: value });
          },
        }),

        // Image area
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
      );
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
