/**
 * Tutorial 03 - Custom Toolbar
 * 
 * Check out the README in this folder for details
 */
( function( blocks, editor, element, components ) { 'use strict';

const el = element.createElement;
// Add toolbar class
const { RichText, MediaUpload, BlockControls, AlignmentToolbar } = editor;


blocks.registerBlockType( 'wpbt/tut-03', {
  title: '03 - Custom Toolbar',
  icon: 'book',
  category: 'layout',
  supports: {
    align: ['left', 'center', 'right', 'wide', 'full'] // or just use 'true' if want to use all alignment
  },

  //
  attributes: {
    title: { type: 'array', source: 'children', selector: 'h2' },
    mediaID: { type: 'number' },
    mediaURL: { type: 'string', source: 'attribute', selector: 'img', attribute: 'src' },
    ingredients: { type: 'array', source: 'children', selector: '.ingredients' },
    steps: { type: 'array', source: 'children', selector: '.steps' },

    // Attributes for toolbar
    alignment: { type: 'string', default: 'none' },
    imagePosition: { type: 'string', default: 'right' }
  },

  //
  example: {
    attributes: {
      title: 'Chocolate Chip Cookies',
      mediaURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/320px-2ChocolateChipCookies.jpg',
      ingredients: [ 'flour', 'sugar', 'chocolate' ],
      steps: [	'Mix', 'Bake', 'Enjoy' ],
      
      alignment: 'left',
      imagePosition: 'right',
    },
  },

  //
  edit: function( props ) {
    let atts = props.attributes;
    
    return [
      // If BlockControls is returned, it will be added to the toolbar
      el( BlockControls,
        {
          key: 'controls',
          // Add imagePosition buttons here
          controls: [
            {
              // Icon list https://developer.wordpress.org/resource/dashicons/
              // You can use SVG by creating it using `el( 'svg', {}, ... )`
              icon: 'align-right',
              title: 'Image on Right',
              className: atts.imagePosition === 'right' ? 'is-active' : '', // active state for the buttons
              onClick: () => {
                props.setAttributes( { imagePosition: 'right' } );
              },
            },
            {
              icon: 'align-left',
              title: 'Image on Left',
              className: atts.imagePosition === 'left' ? 'is-active' : '',
              onClick: () => {
                props.setAttributes( { imagePosition: 'left' } );
              },
            },
          ]
        },
        // Alignment buttons are special, so it needs to be inserted as children of BlockControls
        el( AlignmentToolbar, {
          value: atts.alignment,
          onChange: ( value ) => {
            props.setAttributes( { alignment: value ? value : 'none' } );
          },
        } )
      ),

      // BODY
      el( 'div',
        {
          className: props.className + ' image-' + atts.imagePosition, // add image position class
          style: { textAlign: atts.alignment }, // add 'style' attribute and set 'text-align' property
        },

        // MINIMIZED, read Tut 02 if you want expanded version
        el( RichText, { tagName: 'h2',  inline: true, placeholder: 'Write Recipe title…', value: atts.title, onChange: ( newTitle ) => { props.setAttributes( { title: newTitle } ); }, } ),
        el(	'div', { className: 'recipe-image' },
          el( MediaUpload, { allowedTypes: 'image', value: atts.mediaID,
            onSelect: ( media ) => {
              return props.setAttributes( { mediaURL: media.url, mediaID: media.id, } );
            },
            render: ( obj ) => {
              return el( components.Button, { className: atts.mediaID	? 'button button--transparent' : 'button', onClick: obj.open }, atts.mediaID ? el( 'img', { src: atts.mediaURL } ) : 'Upload Image' );
            } }
          )
        ),
        el( 'h3', {}, 'Ingredients' ),
        el( RichText, {
          tagName: 'ul', multiline: 'li', placeholder: 'Write a list of ingredients…', className: 'ingredients', value: atts.ingredients,
          onChange: ( newIngredients ) => { props.setAttributes( { ingredients: newIngredients } ); }, }
        ),
        el( 'h3', {}, 'Steps' ),
        el( RichText, {
          tagName: 'div', inline: false, placeholder: 'Write instructions…', value: atts.steps,
          onChange: ( newSteps ) => { props.setAttributes( { steps: newSteps } ); }, }
        )
      
      )
    ];
  },

  //
  save: function( props ) {
    let atts = props.attributes;

    return el( 'div',
      // Append the class with position and alignment
      { className: `image-${atts.imagePosition} align-${atts.alignment}` },

      el( RichText.Content, { tagName: 'h2', value: atts.title } ),
      atts.mediaURL && el( 'div', { className: 'recipe-image' },
        el( 'img', { src: atts.mediaURL } )
      ),
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