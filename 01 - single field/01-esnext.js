/**
 * Tutorial 01 - Single Field
 * 
 * Check out the README in this folder for details
 */
import './01.css';
import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

registerBlockType( 'my/tut-01', {
  title: '01 - Single Field',
  icon: 'book',
  category: 'layout',

  // Attribute is a value that you can pass on to HTML markup. It automatically gets updated when the value changes.
  attributes: {
    content: {
      type: 'array',
      source: 'children', // if an attribute has 'source', it will extract the value from saved HTML markup
      selector: 'p' // take the chilren of 'p'
    },
  },

  // This value will be used for Preview when selecting block
  example: {
    attributes: {
      content: 'Hello world',
    },
  },

  // Define how to render the content in Editor
  edit: ( props ) => {
    let atts = props.attributes;

    return <RichText
      tagName="p"
      className={ props.className }
      value={ atts.content }

      // Listener when the RichText is changed.
      onChange={ ( value ) => {
        // Changing value using setAttributes() will update all reference of atts.content
        props.setAttributes( { content: value } );
      } }
    />
  },

  // Define what to save in Database
  save: ( props ) => {
    let atts = props.attributes;

    return <RichText.Content
      tagName="p"
      value={ atts.content }
    />
  },

} );
