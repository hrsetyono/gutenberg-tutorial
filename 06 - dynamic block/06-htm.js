/**
 * Tutorial 06 - Dynamic Block
 *
 * Check out the README in this folder for details
 */
/* eslint-disable indent */
(() => {
  const html = window.htm.bind(window.wp.element.createElement);
  const { registerBlockType } = window.wp.blocks;
  const { SelectControl, __experimentalNumberControl } = window.wp.components;
  const { apiFetch } = window.wp;
  const NumberControl = __experimentalNumberControl;

  registerBlockType('my/tut-06', {
    title: '06 - Dynamic Block',
    icon: 'book',
    category: 'layout',
    example: {},
    attributes: {
      postsPerPage: { type: 'number' },
      selectedCategory: { type: 'string' },
      categories: { type: 'object' },
    },

    edit: async (props) => {
      const atts = props.attributes;

      // Get list of categories if doesn't exists yet
      if (!atts.categories) {
        const categories = await apiFetch({
          url: '/wp-json/wp/v2/categories',
        });

        props.setAttributes({ categories });
      }

      // If categories not yet loaded
      if (!atts.categories) {
        return 'Loading...';
      }

      // If no categories found
      if (atts.categories && atts.categories.length <= 0) {
        return 'No categories found, please add some';
      }

      return html`
        <div className=${props.className}>
          <${SelectControl}
            value=${atts.selectedCategory}
            label="Post Category"
            options=${[
              { label: 'Select a Category', value: '' },
              // loop through categories and create the options format
              // the triple dots is to merge this with the array
              ...atts.categories.map((category) => {
                const { name, id } = category;
                return {
                  label: name,
                  value: id,
                };
              }),
            ]}
            onChange=${(value) => {
              props.setAttributes({ selectedCategory: value });
            }}
          />
  
          <${NumberControl}
            value=${atts.postsPerPage}
            label="Posts per Page"
            placeholder="Enter number of posts"
            onChange=${(value) => {
              props.setAttributes({ postsPerPage: value });
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
