/**
 * Tutorial 02 - Multiple Fields
 * 
 * Check out the README in this folder for details
 */
( function( blocks, editor, element, components ) { 'use strict';

const el = element.createElement;
const { RichText, MediaUpload } = editor;
const { Button } = components;


blocks.registerBlockType( 'my/tut-02', {
  title: '02 - Multiple Fields',
  icon: 'book',
  category: 'layout',

  attributes: {
    // Extract title from <h2>
    title: { 
      type: 'array',
      source: 'children',
      selector: 'h2'
    },
    // since there's no source, this attribute will be saved as JSON comment like this:
    // <!-- { mediaID: 10 } -->
    mediaID: {
      type: 'number'
    },
    // Extract mediaURL from the `src` attribute of <img>
    mediaURL: {
      type: 'string',
      source: 'attribute',
      selector: 'img',
      attribute: 'src'
    },
    // Extract ingredients from the children of class `ingredients`
    ingredients: {
      type: 'array',
      source: 'children',
      selector: '.ingredients'
    },
    steps: {
      type: 'array',
      source: 'children',
      selector: '.steps'
    },
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
    
    /**
     * First, imagine how you want the HTML output to be.
     * 
     * For this tutorial, we want it like this:
     * 
     *   <div class="wp-block-my-tut02">
     *     <h2> Title </h2>
     *     <figure> <img /> </figure>
     *     <h3> Ingredients </h3>
     *     <ul>
     *       <li> ... </li>
     *       <li> ... </li>
     *     </ul>
     *     <h3> Steps </h3>
     *     <div>
     *       <p> ... </p>
     *       <p> ... </p>
     *     </div>
     *   </div>
     * 
     * Now we need to translate it to React:
     */
    return el( 'div',	{ className: props.className },
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
      el( 'figure', {},
        el( MediaUpload, {
          allowedTypes: 'image',
          value: atts.mediaID,
          onSelect: ( media ) => {
            props.setAttributes( {
              mediaURL: media.url,
              mediaID: media.id,
            } );
          },
          // Create a button that opens media library when clicked
          render: ( obj ) => {
            let className = atts.mediaID	? 'button button--transparent' : 'button';
            
            // If Image ID exists, show <img>, otherwise show a text to upload imge.
            let buttonContent = atts.mediaID ?
              el( 'img', { src: atts.mediaURL } ) : 'Upload Image';

            return el( Button, { className: className, onClick: obj.open },
              buttonContent
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
        multiline: 'p',
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
  // This saved HTML will be used for extracting the attributes
  save: function( props ) {
    let atts = props.attributes;
    
    return el( 'div',	{}, // classes from `props.className` will be added automatically
      // Recipe Title
      el( RichText.Content, {
        tagName: 'h2',
        value: atts.title,
      } ),
      // If Image is set
      atts.mediaURL && el( 'figure', {},
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