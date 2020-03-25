/*
  Tutorial 04b - All Inspector Controls
  
  - Learn how to add more controls in Inspector.
  
  TASK:
    Continuing from Tutorial 01, add these field type in Inspector:
  
    - Textarea    - Radio
    - Checkbox    - Select
    - Range       - Custom Color Palette
  
    No need to be applied in any part of edit() or save(), just showcase them.
  
  REFERENCE:
  - https://rudrastyh.com/gutenberg/inspector-controls.html
  - https://florianbrinkmann.com/en/different-color-palettes-gutenberg-5327/
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
    var atts = props.attributes;

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
              colors: [
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

      el( RichText, {
        tagName: 'p',
        className: props.className,
        value: atts.content,
        style: { '--bgColor': atts.customBgColor, '--textColor': atts.customColor },
        onChange: ( value ) => { props.setAttributes( { content: value } ); }
      } )
    ];
  },

  //
  save: ( props ) => {
    return el( RichText.Content, {
      tagName: 'p',
      style: { '--bgColor': atts.customBgColor, '--textColor': atts.customColor },
      value: props.attributes.content
    } );
  },

} );
} )( window.wp.blocks, window.wp.blockEditor, window.wp.element, window.wp.components );