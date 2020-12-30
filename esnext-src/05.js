/**
 * Tutorial 05 - Nested Block
 * 
 * Check out the README in this folder for details
 */

import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

registerBlockType( 'my/tut-05', {
  title: '05 - Nested Blocks',
  icon: 'book',
  category: 'layout',
  attributes: {}, // InnerBlocks doesn't need attributes
  example: {},

  //
  edit: ( props ) => {
    return <div className={ props.className }>
      {/* You can't have more than 1 InnerBlocks */}
      <InnerBlocks
        // Only allow these blocks to be its children, remove this param to allow all blocks
        allowedBlocks={ [ 'core/image', 'core/heading', 'core/paragraph', 'core/list' ] }
        // The initial layout
        template={ [
          [ 'core/image', {} ],
          [ 'core/heading', { placeholder: 'Book Title'} ],
          [ 'core/paragraph', { placeholder: 'Summary' } ]
        ] }
        // prevent any changes besides content
        templateLock="all"
      />
    </div>
  },

  save: ( props ) => {
    return <div className={ props.className }>
      {/* Here's how to ouput InnerBlocks content */}
      <InnerBlocks.Content />
    </div>
  },

} );