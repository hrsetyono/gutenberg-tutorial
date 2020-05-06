/**
 * Tutorial 04c - Custom Color Pickers
 * 
 * Check out the README in this folder for details
 */
( function( blocks, editor, element, components ) { 'use strict';

const el = element.createElement;
const { RichText, InspectorControls, PanelColorSettings } = editor;

blocks.registerBlockType( 'wpbt/tut-04c', {
  title: '04c - Custom Color Picker',
  icon: 'book',
  category: 'layout',

  attributes: {
    content: { type: 'array', source: 'children', selector: 'p', default: 'Take a look at the Sidebar >>' },

    customColor: { type: 'string', default: '#2196f3' },
    customBgColor: { type: 'string', default: '#c8e6c9' },
    
  },

  example: {},

  //
  edit: ( props ) => {
    let atts = props.attributes;

    return [
      el( InspectorControls, {},

        el( PanelColorSettings, {
          title: 'Panel Color',
          initialOpen: true,
          colorSettings: [
            {
              label: 'Custom Color',
              value: atts.customColor,
              disableCustomColors: true,
              colors: [ // If you want to use default color from Palette, simply remove this argument
                { name: 'Red', slug: 'red', color: '#f44336' },
                { name: 'Green', slug: 'green', color: '#4caf50' },
                { name: 'Blue', slug: 'blue', color: '#2196f3' },
                { name: 'Yellow', slug: 'yellow', color: '#ffeb3b' },
              ],
              onChange: (value) => {
                props.setAttributes( { customColor: value ? value : 'none' } )
              }
            },
            {
              label: 'Custom Background Color',
              value: atts.customBgColor,
              disableCustomColors: true,
              colors: [
                { name: 'Red Light', slug: 'red-light', color: '#ffcdd2' },
                { name: 'Green Light', slug: 'green-light', color: '#c8e6c9' },
                { name: 'Blue Light', slug: 'blue-light', color: '#bbdefb' },
                { name: 'Yellow Light', slug: 'yellow-light', color: '#fff9c4' },
              ],
              onChange: (value) => {
                props.setAttributes( { customBgColor: value ? value : 'none' } )
              }
            },
          ],
        } ),

      ),

      // There's a bug where RichText can't have CSS Var applied
      //   So we need this div wrapper to apply the CSS Var
      el( 'div', { style: { '--bgColor': atts.customBgColor, '--textColor': atts.customColor } },
        el( RichText, {
          tagName: 'p',
          className: props.className,
          value: atts.content,
          onChange: ( value ) => {
            props.setAttributes( { content: value } );
          }
        } )
      ),
    ];
  },

  //
  save: ( props ) => {
    let atts = props.attributes;

    return el( 'div', { style: { '--bgColor': atts.customBgColor, '--textColor': atts.customColor } },
      el( RichText.Content, {
        tagName: 'p',
        value: atts.content
      } ),
    );
  },

} );
} )( window.wp.blocks, window.wp.blockEditor, window.wp.element, window.wp.components );


/*
  That's all folks!
  
  If you spot a mistake or want to request a topic, let me know in https://github.com/hrsetyono/wp-blocks-tutorial/issues
*/