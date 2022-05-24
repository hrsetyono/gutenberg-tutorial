/**
 * Tutorial 05 - Nested Block
 *
 * Check out the README in this folder for details
 */
(() => {
  const el = window.wp.element.createElement;
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
      return el(
        'div',
        { className: props.className },
        // You can't have more than 1 InnerBlocks
        el(InnerBlocks, {
          // Only allow these blocks to be its children, remove this param to allow all blocks
          allowedBlocks: ['core/image', 'core/heading', 'core/paragraph', 'core/list'],

          // The initial layout
          template: [
            ['core/image', {}],
            ['core/heading', { placeholder: 'Book Title' }],
            ['core/paragraph', { placeholder: 'Summary' }],
          ],
          templateLock: 'all', // prevent any changes besides content
        }),
      );
    },

    /**
     * Output the InnerBlock in a div
     */
    save: (props) => {
      const atts = props.attributes;
      return el(
        'div',
        { className: props.className },
        el(InnerBlocks.Content),
      );
    },

  });
})();

/**
 * That's all folks!
 * If you spot a mistake or want to request a topic, let me know in https://github.com/hrsetyono/gutenberg-tutorial/issues
 */
