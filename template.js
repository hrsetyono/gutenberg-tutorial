/**
 * Block Name
 * 
 * Write short description here
 */
( function( blocks, editor, element, components ) { 'use strict';

const el = element.createElement;
const { RichText } = editor;

blocks.registerBlockType( 'namespace/block-name', {
  title: 'Block Name',
  icon: 'book',
  category: 'layout',

  attributes: {
    content: { type: 'array', source: 'children', selector: 'p' },
  },

  example: {},

  //
  edit: ( props ) => {
    let atts = props.attributes;

    return el( RichText, {
      tagName: 'p',
      className: props.className,
      value: atts.content,

      onChange: ( value ) => {
        props.setAttributes( { content: value } );
      },
    } );
  },

  //
  save: ( props ) => {
    let atts = props.attributes;

    return el( RichText.Content, {
      tagName: 'p',
      value: atts.content,
    } );
  },

} );
} )( window.wp.blocks, window.wp.blockEditor, window.wp.element, window.wp.components );