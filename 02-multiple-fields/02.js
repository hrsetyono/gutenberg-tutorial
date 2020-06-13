/**
 * Tutorial 02 - Multiple Fields
 * 
 * Check out the README in this folder for details
 */
( function( blocks, editor, element, components ) { 'use strict';

const el = element.createElement;
const { RichText, MediaUpload } = editor;


blocks.registerBlockType( 'wpbt/tut-02', {
  title: '02 - Multiple Fields',
  icon: 'book',
  category: 'layout',

  // Define how to extract values from saved content
  attributes: {
    title: { type: 'array', source: 'children', selector: 'h2' },
    mediaID: { type: 'number' }, // not extracting from anywhere
    mediaURL: { type: 'string', source: 'attribute', selector: 'img', attribute: 'src' }, // extract from 'src' attribute of <img>
    ingredients: { type: 'array', source: 'children', selector: '.ingredients' },
    steps: { type: 'array', source: 'children', selector: '.steps' },
  },

  // This value will be used for Preview when selecting block
  example: {
    attributes: {
      title: 'Chocolate Chip Cookies',
      mediaURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/320px-2ChocolateChipCookies.jpg',
      ingredients: [ 'flour', 'sugar', 'chocolate' ],
      steps: [	'Mix', 'Bake', 'Enjoy' ],
    },
  },

  // Define how to render the content in Editor
  edit: function( props ) {
    let atts = props.attributes;
    
    return el( 'div',	{ className: props.className }, // Outer div wrapper
      // Recipe title as H2
      el( RichText, {
        tagName: 'h2',
        inline: true,
        placeholder: 'Write Recipe title…',
        value: atts.title,
        onChange: ( value ) => {
          props.setAttributes( { title: value } );
        },
      } ),
      
      // Image area
      el( 'div', { className: 'recipe-image' },
        el( MediaUpload, {
          allowedTypes: 'image',
          value: atts.mediaID,
          onSelect: ( media ) => {
            return props.setAttributes( {
              mediaURL: media.url,
              mediaID: media.id,
            } );
          },
          // Create a button that opens media library when clicked
          render: ( obj ) => {
            return el( components.Button,
              {
                className: atts.mediaID	? 'button button--transparent' : 'button',
                onClick: obj.open,
              },
              // If Image ID exists, show <img>, otherwise show a text to upload imge.
              atts.mediaID ? el( 'img', { src: atts.mediaURL } ) : 'Upload Image'
            );
          }
        } )
      ),

      // Static H3 with the text 'Ingredients'
      el( 'h3', {}, 'Ingredients' ),
      
      // Create a RichText with UL as wrapper and all its children uses LI
      el( RichText, {
        tagName: 'ul',
        multiline: 'li',
        placeholder: 'Write a list of ingredients…',
        className: 'ingredients',
        value: atts.ingredients,
        onChange: ( value ) => {
          props.setAttributes( { ingredients: value } );
        },
      } ),
      
      // Another static H3
      el( 'h3', {}, 'Steps' ),
      
      // Create a RichText with DIV as wrapper
      el( RichText, {
        tagName: 'div',
        inline: false,
        placeholder: 'Write instructions…',
        value: atts.steps,
        onChange: ( value ) => {
          props.setAttributes( { steps: value } );
        },
      } )
    );

  },

  // Define what to save in Database
  save: function( props ) {
    let atts = props.attributes;

    return el( 'div',	{},
      // Recipe Title
      el( RichText.Content, {
        tagName: 'h2',
        value: atts.title,
      } ),
      // If Image is set
      atts.mediaURL && el( 'div',
        { className: 'recipe-image' },
        el( 'img', { src: atts.mediaURL } )
      ),

      el( 'h3', {}, 'Ingredients' ),

      el( RichText.Content, {
        tagName: 'ul',
        className: 'ingredients',
        value: atts.ingredients,
      } ),

      el( 'h3', {}, 'Instructions' ),

      el( RichText.Content, {
        tagName: 'div',
        className: 'steps',
        value: atts.steps,
      } )
    );
  },

} );

} )( window.wp.blocks, window.wp.blockEditor, window.wp.element, window.wp.components );

/*
  That's all folks!
  
  If you spot a mistake or want to request a topic, let me know in https://github.com/hrsetyono/wp-blocks-tutorial/issues
*/