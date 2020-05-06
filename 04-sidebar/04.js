/**
 * Tutorial 04 - Custom Inspector
 * 
 * Check out the README in this folder for details
 */
( function( blocks, editor, element, components ) { 'use strict';

const el = element.createElement;
// Initiate Sidebar class
const { RichText, MediaUpload, InspectorControls, ColorPalette } = editor;
const { TextControl, ToggleControl, PanelBody } = components;


blocks.registerBlockType( 'wpbt/tut-04', {
  title: '04 - Custom Inspector',
  icon: 'book',
  category: 'layout',

  //
  attributes: {
    title: { type: 'array', source: 'children', selector: 'h2' },
    mediaID: { type: 'number' },
    mediaURL: { type: 'string', source: 'attribute', selector: 'img', attribute: 'src' },
    ingredients: { type: 'array', source: 'children', selector: '.ingredients' },
    steps: { type: 'array', source: 'children', selector: '.steps' },

    // attributes for inspector
    titleColor: { type: 'string' },
    recipeLabel: { type: 'string', default: 'NEW', source: 'children', selector: 'label' },
    hasImage: { type: 'boolean', default: true }
  },

  //
  example: {
    attributes: {
      title: 'Chocolate Chip Cookies',
      mediaURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/320px-2ChocolateChipCookies.jpg',
      ingredients: [ 'flour', 'sugar', 'chocolate' ],
      steps: [	'Mix', 'Bake', 'Enjoy' ],
    },
  },

  //
  edit: function( props ) {
    let atts = props.attributes;
    
    return [
      // If InspectorControls is returned, it will be added to the sidebar
      el( InspectorControls, {},
        el( PanelBody, { title: 'Settings', initialOpen: true },

          // ColorPalette label
          el( 'p', {}, 'Title Color' ),
          // Color Palette
          // Possible args: https://developer.wordpress.org/block-editor/components/color-palette/
          el( ColorPalette, {
            value: atts.titleColor,
            onChange: ( value ) => {
              props.setAttributes( { titleColor: value ? value : 'none' } );
            },
          } ),

          // Input Text
          el( TextControl, {
            label: 'Recipe Label',
            value: atts.recipeLabel,
            onChange: ( value ) => {
              props.setAttributes( { recipeLabel: value } );
            },
          } ),
          
          // On Off Switch
          el( ToggleControl, {
            label: 'Has Image?',
            checked: atts.hasImage,
            onChange: ( value ) => {
              props.setAttributes( { hasImage: value } );
            },
          } )
        ),
      ),
      
      // The codes below are mostly minimized, read Tut 02 if you want expanded version
      el( 'div', {
        className: props.className,
        style: { '--titleColor': atts.titleColor }, // add 'style' attribute and set '--titleColor' property
      },

        el( RichText, {
          tagName: 'h2', inline: true, placeholder: 'Write Recipe title…', value: atts.title,
          onChange: ( newTitle ) => { props.setAttributes( { title: newTitle } ); }, }
        ),

        // Add label from Sidebar
        el( 'label', { className: atts.recipeLabel ? '' : 'hidden' }, atts.recipeLabel ),

        // Hide image if hasImage toggle is off
        el(	'div',
          { className: 'recipe-image ' + (atts.hasImage ? '' : 'hidden') },
          el( MediaUpload, {  onSelect: _onSelectImage, allowedTypes: 'image', value: atts.mediaID, render: _renderImage } )
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

    /////

    function _onSelectImage( media ) {
      return props.setAttributes( {
        mediaURL: media.url,
        mediaID: media.id,
      } );
    }

    function _renderImage( obj ) {
      return el( components.Button,
        {
          className: atts.mediaID	? 'button button--transparent' : 'button',
          onClick: obj.open,
        },

        atts.mediaID ? el( 'img', { src: atts.mediaURL } ) : 'Upload Image'
      );
    }

  },

  //
  save: function( props ) {
    let atts = props.attributes;
    return el( 'div', { style: { '--titleColor': atts.titleColor } },

      el( RichText.Content, { tagName: 'h2', value: atts.title } ),

      // Create the label
      atts.recipeLabel && el( 'label', {}, atts.recipeLabel ),

      // Add extra check to hide the image if hasImage is false
      atts.mediaURL && atts.hasImage && el( 'div', { className: 'recipe-image' },
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