/**
 * Tutorial 01 - Single Field
 *
 * Check out the README in this folder for details
 */
/* eslint-disable indent */
(() => {
  const html = window.htm.bind(window.wp.element.createElement);
  const { registerBlockType } = window.wp.blocks;
  const { RichText } = window.wp.blockEditor;

  registerBlockType('my/tut-01', {
    title: '01 - Single Field',
    icon: 'book',
    category: 'layout',
    example: {},

    // Attribute is a value that you can pass on to HTML markup. It automatically gets updated when the value changes.
    attributes: {
      content: {
        type: 'array',
        source: 'children', // if an attribute has 'source', it will extract the value from saved HTML markup
        selector: 'p', // take the chilren of 'p'
      },
    },

    // Define how to render the content in Editor
    edit: (props) => {
      const atts = props.attributes;

      return html`
        <${RichText}
          tagName="p"
          className=${props.className}
          value=${atts.content}
          onChange=${(value) => {
            props.setAttributes({ content: value });
          }}
        />
      `;
    },

    // Define what to save in Database
    save: (props) => {
      const atts = props.attributes;

      return html`
        <${RichText.Content}
          tagName="p"
          value=${atts.content}
        />
      `;
    },
  });
})();

/**
* That's all folks!
* If you spot a mistake or want to request a topic, let me know in https://github.com/hrsetyono/gutenberg-tutorial/issues
*/
