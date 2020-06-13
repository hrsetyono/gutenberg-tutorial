/**
 * Tutorial 06 - Dynamic Block
 * 
 * Check out the README in this folder for details
 */
( function( blocks, editor, element, components ) { 'use strict';

const el = element.createElement;

blocks.registerBlockType( 'my/tut-06', {
  title: '06 - Dynamic Block',
  icon: 'book',
  category: 'layout',

  // Attributes for Latest Posts
  attributes: {
    postsPerPage: { type: 'number' },
    selectedCategory: { type: 'string' },
    categories: { type: 'object' },
  },

  edit: function( props ) {
    let atts = props.attributes;
    
    // Get list of categories if doesn't exists yet
    if( !atts.categories ) {
      wp.apiFetch( {
        url: '/wp-json/wp/v2/categories',
      } ).then( categories => {
        props.setAttributes( { categories: categories } );
      } )
    }

    // If categories not yet loaded
    if( !atts.categories ) {
      return 'Loading...';
    }

    // If no categories found
    if( atts.categories && atts.categories.length <= 0 ) {
      return 'No categories found, please add some';
    }


    return el( 'div', { className: props.className },
    
      // Category select
      el( 'div', {}, 
        el( 'label', {}, 'Post Category: ' ),
        el( 'select',
          {
            value: atts.selectedCategory,
            onChange: (e) => {
              props.setAttributes( { selectedCategory: e.target.value } );
            }
          },
          [
            el( 'option', { value: '' }, 'Select a Category' ),
            ...atts.categories.map( category => {
              return (
                el( 'option', { value: category.id, key: category.id }, category.name )
              );
            } )
          ]
        ),
      ),

      // Input for postsPerPage
      el( 'div', {},
        el( 'label', {}, 'Posts per Page: ' ),
        el( 'input', {
          value: atts.postsPerPage,
          placeholder: 'Enter number of posts',
          type: 'number',
          
          onChange: (e) => {
            props.setAttributes( { postsPerPage: e.target.value } );
          }
        }),
      ),
      
    );
  },

  // Let the gutenberg know that this will be rendered via render_callback in PHP
  // Or you can simply remove this function
  save: function( props ) {
    return null
  }

} );

} )( window.wp.blocks, window.wp.blockEditor, window.wp.element, window.wp.components );


/*
  That's all folks!
  
  If you spot a mistake or want to request a topic, let me know in https://github.com/hrsetyono/wp-blocks-tutorial/issues
*/