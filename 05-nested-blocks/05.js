/*
  Tutorial 05 - Nested Blocks
 
  - Learn how to create a group of other blocks using InnerBlocks.
  
  TASK:
    Create a block containing Heading, Paragraph, and Image blocks by default.
  
  REFERENCE:
  - https://developer.wordpress.org/block-editor/tutorials/block-tutorial/nested-blocks-inner-blocks/
  - https://github.com/WordPress/gutenberg/tree/master/packages/block-editor/src/components/inner-blocks
*/
( function( blocks, editor, element, components ) { 'use strict';

const el = element.createElement;
const { InnerBlocks } = editor;

blocks.registerBlockType( 'wpbt/tut-05', {
  title: '05 - Nested Blocks',
  icon: 'book',
  category: 'layout',
  attributes: {}, // InnerBlocks doesn't need attributes
  example: {},

  //
  edit: ( props ) => {
    return el( 'div', { className: props.className },
      el( InnerBlocks, {
        // Only allow these blocks to be its children, remove this param to allow all blocks
        allowedBlocks: [ 'core/image', 'core/heading', 'core/paragraph', 'core/list' ],

        // The initial layout
        template: [
          [ 'core/image', {} ],
          [ 'core/heading', { placeholder: 'Book Title'} ],
          [ 'core/paragraph', { placeholder: 'Summary' } ]
        ],
        templateLock: 'all', // prevent any changes besides content
      } ),
    );
  },

  // Save a div containing all the InnerBlocks content
  save: ( props ) => {
    return el( 'div', { className: props.className },
      el( InnerBlocks.Content )
    );
  },

} );
} )( window.wp.blocks, window.wp.blockEditor, window.wp.element, window.wp.components );