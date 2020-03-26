/*
  Tutorial 06b - Dynamic Block Part 2
  
  - Learn how to transform a block into dynamic block.
  - Learn how to save RichText content as attribute.
  - This is so you can update the markup without breaking the one already in use.
  
  TASK:
    Transform the Cooking Recipe from Tutorial 02 into dynamic block.
    
    - The first step is to make save() returns null.
    - Then you need to add code to save RichText content as attribute.
  
  REFERENCE:
  - https://developer.wordpress.org/block-editor/tutorials/block-tutorial/creating-dynamic-blocks/
*/
( function( blocks, editor, element, components ) { 'use strict';

const el = element.createElement;
const { RichText, MediaUpload, InnerBlocks } = editor;


blocks.registerBlockType( 'wpbt/tut-06b', {
  title: '06b - Dynamic Block Part 2',
  icon: 'book',
  category: 'layout',

  // No need to define how to extract the attributes, just define the 'type'
  attributes: {
    title: { type: 'string' }, // RichText should be 'string'.
    mediaID: { type: 'number' },
    mediaURL: { type: 'string' },
    ingredients: { type: 'string' },
    // steps: { type: 'string' }, // replaced by InnerBlocks
  },

  //
  edit: function( props ) {
    let atts = props.attributes;
    
    return el( 'div',	{ className: props.className },

      el( RichText, {
        tagName: 'h2',
        inline: true,
        placeholder: 'Write Recipe title…',
        value: atts.title,
        onChange: ( value ) => {
          props.setAttributes( { title: value } );
        },
      } ),
      
      el(	'div', { className: 'recipe-image' },
        el( MediaUpload, {
          onSelect: _onSelectImage,
          allowedTypes: 'image',
          value: atts.mediaID,
          render: _renderImage
        } )
      ),

      el( 'h3', {}, 'Ingredients' ),
      
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
      
      el( 'h3', {}, 'Steps' ),
      
      // Turn Steps into InnerBlocks
      el( InnerBlocks, {
        template: [
          [ 'core/paragraph', { placeholder: 'Write the instruction...' } ]
        ],
      } )
    );

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
    // If you use InnerBlocks and want to be dynamic, you need to save it like this
    //   This will save the InnerBlocks as the 2nd param of render_callback()
    return el( InnerBlocks.Content );
  },

} );

} )( window.wp.blocks, window.wp.blockEditor, window.wp.element, window.wp.components );


/*
  That's all folks!
  
  If you spot a mistake or want to request a topic, let me know in https://github.com/hrsetyono/wp-blocks-tutorial/issues
*/