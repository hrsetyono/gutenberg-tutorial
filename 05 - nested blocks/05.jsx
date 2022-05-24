/**
 * Tutorial 05 - Nested Block
 *
 * Check out the README in this folder for details
 */
import './05.css';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

registerBlockType('my/tut-05', {
  title: '05 - Nested Blocks',
  icon: 'book',
  category: 'layout',
  attributes: {}, // InnerBlocks doesn't need attributes
  example: {},

  //
  edit: (props) => {
    const atts = props.attributes;
    return (
      <div className={props.className}>
        {/* You can't have more than 1 InnerBlocks */}
        <InnerBlocks
          // Only allow these blocks to be its children, remove this param to allow all blocks
          allowedBlocks={['core/image', 'core/heading', 'core/paragraph', 'core/list']}
          // prevent any changes besides content
          templateLock="all"
          // The initial layout
          template={[
            ['core/image', {}],
            ['core/heading', { placeholder: 'Book Title' }],
            ['core/paragraph', { placeholder: 'Summary' }],
          ]}
        />
      </div>
    );
  },

  /**
   * Output the InnerBlock in a div
   */
  save: (props) => {
    const atts = props.attributes;
    return (
      <div className={props.className}>
        <InnerBlocks.Content />
      </div>
    );
  },

});

/**
* That's all folks!
* If you spot a mistake or want to request a topic, let me know in https://github.com/hrsetyono/gutenberg-tutorial/issues
*/
