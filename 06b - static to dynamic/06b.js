/**
 * Tutorial 06b - Converting Static to Dynamic Block
 * 
 * Check out the README in this folder for details
 */
( function( blocks, editor, element, components ) { 'use strict';

const el = element.createElement;
const { RichText, MediaUpload } = editor;
const { Button } = components;

blocks.registerBlockType( 'my/tut-06b', {
  title: '06b - Static to Dynamic Block',
  description: 'This block is rendered via PHP',
  icon: 'book',
  category: 'layout',

  // Removed all 'source' param so the attribute is saved to the database
  attributes: {
    title: { type: 'string' }, // RichText become string instead of array
    mediaID: { type: 'number' },
    mediaURL: { type: 'string',  },
    ingredients: { type: 'string' },
    steps: { type: 'string' },
  },

  //
  example: {},

  
  // This edit() is exactly the same as Tut 02
  edit: function( props ) {
    let atts = props.attributes;
    
    return [
      // BODY
      el( 'div', { className: props.className },
        el( RichText, { tagName: 'h2', inline: true, placeholder: 'Write Recipe title…',
          value: atts.title,
          onChange: value => props.setAttributes( { title: value } )
        } ),
        
        el( 'figure', {},
          el( MediaUpload, { allowedTypes: 'image', value: atts.mediaID,
            onSelect: media => props.setAttributes( { mediaURL: media.url, mediaID: media.id } ),
            render: ( obj ) => {
              let className = atts.mediaID	? 'button button--transparent' : 'button';
              let buttonContent = atts.mediaID ?
                el( 'img', { src: atts.mediaURL } ) : 'Upload Image';
              return el( Button, { className: className, onClick: obj.open }, buttonContent );
            }
          } )
        ),
  
        el( 'h3', {}, 'Ingredients' ),
        el( RichText, { tagName: 'ul', multiline: 'li', placeholder: 'Write a list of ingredients…',
          className: 'ingredients', value: atts.ingredients,
          onChange: value => props.setAttributes( { ingredients: value } )
        } ),
        
        el( 'h3', {}, 'Steps' ),
        el( RichText, { tagName: 'div', multiline: 'p', inline: false,
          placeholder: 'Write instructions…', value: atts.steps,
          onChange: value => props.setAttributes( { steps: value } )
        } )
      )
    ];
  },

  // Returning null means rendering will be done via PHP
  save: function( props ) {
    return null;
  },

} );

} )( window.wp.blocks, window.wp.blockEditor, window.wp.element, window.wp.components );

/*
  That's all folks!
  
  If you spot a mistake or want to request a topic, let me know in https://github.com/hrsetyono/wp-blocks-tutorial/issues
*/