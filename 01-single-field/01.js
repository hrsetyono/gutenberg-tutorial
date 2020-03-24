/**
 * Tutorial 01 - Single Field
 * 
 * - Learn the basic of creating custom block.
 * - Introduces the concept of attributes.
 * - Learn about RichText field
 * 
 * TASK:
 *   Create a block containing a single input field
 * 
 * REFERENCE:
 * - https://github.com/WordPress/gutenberg-examples
 * - https://developer.wordpress.org/block-editor/developers/block-api/block-attributes/
 */
( function( blocks, editor, element ) { 'use strict';

const el = element.createElement;
const { RichText } = editor;

blocks.registerBlockType( 'wpbt/tut-01', {
  title: '01 - Single Field',
  icon: 'book',
  category: 'layout',

  // Define how to extract values from saved content
  attributes: {
    // RichText value is array, and we want to get every children under <p>
    content: { type: 'array', source: 'children', selector: 'p' },
  },

  // This value will be used for Preview when selecting block
  example: {
    attributes: {
      content: 'Hello world',
    },
  },

  // Define how to render the content in Editor
  edit: ( props ) => {
    var content = props.attributes.content;

    return el( RichText, {
      tagName: 'p',
      className: props.className,
      onChange: _onChangeContent,
      value: content,
    } );

    //
    function _onChangeContent( newContent ) {
      props.setAttributes( { content: newContent } );
    }
  },

  // Define what to save in Database
  save: ( props ) => {
    return el( RichText.Content, {
      tagName: 'p',
      value: props.attributes.content,
    } );
  },

} );
} )( window.wp.blocks, window.wp.blockEditor, window.wp.element );