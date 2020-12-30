/**
 * Tutorial 03 - Custom Toolbar
 * 
 * Check out the README in this folder for details
 */
( function( blocks, editor, element, components ) { 'use strict';

const el = element.createElement;
const { RichText, MediaUpload, BlockControls, AlignmentToolbar } = editor;
const { Button, ToolbarGroup, ToolbarButton } = components;


blocks.registerBlockType( 'my/tut-03', {
  title: '03 - Custom Toolbar',
  icon: 'book',
  category: 'layout',

  //
  attributes: {
    title: { type: 'array', source: 'children', selector: 'h2' },
    mediaID: { type: 'number' },
    mediaURL: { type: 'string', source: 'attribute', selector: 'img', attribute: 'src' },
    ingredients: { type: 'array', source: 'children', selector: '.ingredients' },
    steps: { type: 'array', source: 'children', selector: '.steps' },

    // Attributes for toolbar
    align: { type: 'string', default: 'none' },
    imagePosition: { type: 'string', default: 'right' }
  },

  //
  example: {
    attributes: {
      title: 'Chocolate Chip Cookies',
      mediaURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/320px-2ChocolateChipCookies.jpg',
      ingredients: [ 'flour', 'sugar', 'chocolate' ],
      steps: [	'Mix', 'Bake', 'Enjoy' ],
      
      align: 'left',
      imagePosition: 'right',
    },
  },

  //
  edit: function( props ) {
    let atts = props.attributes;
    
    return [
      // If BlockControls is returned, it will be added to the toolbar
      el( BlockControls, {},

        // Image position toolbar
        el( ToolbarGroup, {}, 
          el( ToolbarButton, {
            icon: 'align-right', // Icon list https://developer.wordpress.org/resource/dashicons/
            title: 'Image on Right',
            className: atts.imagePosition === 'right' ? 'is-pressed' : '', // active state for the buttons
            onClick: () => {
              props.setAttributes( { imagePosition: 'right' } );
            },
          } ),

          el( ToolbarButton, {
            icon: 'align-left',
            title: 'Image on Left',
            className: atts.imagePosition === 'left' ? 'is-pressed' : '',
            onClick: () => {
              props.setAttributes( { imagePosition: 'left' } );
            },
          } ),
        ),

        // Text alignment toolbar
        el( AlignmentToolbar, {
          value: atts.align,
          onChange: ( value ) => {
            props.setAttributes( { align: value ? value : 'none' } );
          },
        } )
      ),

      // BODY
      el( 'div',
        {
          // add extra class name based on selected toolbar
          className: `${props.className}
            image-${atts.imagePosition}
            has-text-align-${atts.align}`
        },

        // This is the same as Tut 02
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

  //
  save: function( props ) {
    let atts = props.attributes;

    // Add extra class name based on selected toolbar
    return el( 'div', { className: `image-${atts.imagePosition} has-text-align-${atts.align}` }, 

      // This is the same as Tut 02
      el( RichText.Content, { tagName: 'h2', value: atts.title } ),
      atts.mediaURL && el( 'figure', {}, el( 'img', { src: atts.mediaURL } ) ),
      el( 'h3', {}, 'Ingredients' ),
      el( RichText.Content, { tagName: 'ul', className: 'ingredients', value: atts.ingredients } ),
      el( 'h3', {}, 'Instructions' ),
      el( RichText.Content, { tagName: 'div', className: 'steps', value: atts.steps } )
    );
  },

} );

} )( window.wp.blocks, window.wp.blockEditor, window.wp.element, window.wp.components );

/*
  That's all folks!
  
  If you spot a mistake or want to request a topic, let me know in https://github.com/hrsetyono/wp-blocks-tutorial/issues
*/