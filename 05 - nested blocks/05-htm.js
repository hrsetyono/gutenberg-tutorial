/**
 * Tutorial 05 - Nested Block
 *
 * Check out the README in this folder for details
 */
/* eslint-disable indent */
(() => {
  const html = window.htm.bind(window.wp.element.createElement);
  const { registerBlockType } = window.wp.blocks;
  const { InnerBlocks } = window.wp.blockEditor;

  registerBlockType('my/tut-05', {
    title: '05 - Nested Blocks',
    icon: 'book',
    category: 'layout',
    attributes: {}, // InnerBlocks doesn't need attributes
    example: {},

    //
    edit: (props) => {
      const atts = props.attributes;
      return html`
        <div className=${props.className}>
          <!-- You can't have more than 1 InnerBlocks -->
          <!-- Only allow adding these 4 blocks, add initial template and lock it -->
          <${InnerBlocks}
            allowedBlocks=${['core/image', 'core/heading', 'core/paragraph', 'core/list']}
            templateLock="all"
            template=${[
              ['core/image', {}],
              ['core/heading', { placeholder: 'Book Title' }],
              ['core/paragraph', { placeholder: 'Summary' }],
            ]}
          />
        </div>
      `;
    },

    /**
     * Output the InnerBlock in a div
     */
    save: (props) => {
      const atts = props.attributes;
      return html`
        <div className=${props.className}>
          <${InnerBlocks.Content} />
        </div>
      `;
    },

  });
})();

/**
 * That's all folks!
 * If you spot a mistake or want to request a topic, let me know in https://github.com/hrsetyono/gutenberg-tutorial/issues
 */
