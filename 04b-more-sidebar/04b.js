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
const { RichText, InspectorControls, ColorPalette, PanelColorSettings } = editor;
const { PanelBody, TextControl, ToggleControl, CheckboxControl, RadioControl, SelectControl, TextareaControl, RangeControl } = components;

blocks.registerBlockType( 'wpbt/tut-04b', {
  title: '04b - All Inspector Controls',
  icon: 'book',
  category: 'layout',

  attributes: {
    content: { type: 'array', source: 'children', selector: 'p', default: 'Take a look at the Sidebar >>' },

    // values from custom inspector controls
    text: { type: 'string' },
    textarea: { type: 'string' },
    select: { type: 'string' },
    range: { type: 'integer', default: 5 },

    checkbox: { type: 'boolean', default: true },
    checkboxes: { type: 'object', default: {
      'Checkbox 1': false,
      'Checkbox 2': true,
      'Checkbox 3': false,
    } },
    radio: { type: 'string', default: 'radio1' },
    toggle: { type: 'boolean', default: true },

    customColor: { type: 'string', default: '#2196f3' },
    customBgColor: { type: 'string', default: '#c8e6c9' },
    
  },

  example: {},

  //
  edit: ( props ) => {
    var atts = props.attributes;

    return [
      el( InspectorControls, {},

        ///// PANEL 1
        el( PanelBody, { title: 'Panel 1', initialOpen: false },

          // Text Field
          el( TextControl, {
            label: 'TextControl',
            value : atts.text,
            onChange: ( value ) => {
              props.setAttributes( { text: value } );
            },
          } ),

          // Textarea
          el( TextareaControl, {
            label: 'TextareaControl',
            value: atts.textarea,
            onChange: ( value ) => {
              props.setAttributes( { textarea: value } );
            },
          } ),

          // Select Dropdown
          el( SelectControl, {
            label: 'SelectControl',
            options : [
              { label: 'Option 1', value: 'option1' },
              { label: 'Option 2', value: 'option2' },
              { label: 'Option 3', value: 'option3' },
            ],
            value: atts.select,
            onChange: ( value ) => {
              props.setAttributes( { select: value } );
            },
          } ),

          // Range
          el( RangeControl, {
            label: 'RangeControl',
            min: 1,
            max: 10,
            value: atts.range,
            onChange: ( value ) => {
              props.setAttributes( { range: value } );
            },
          } ),

        ),

        ///// PANEL 2
        el( PanelBody, { title: 'Panel 2', initialOpen: false },
          // Single Checkboxes
          el( CheckboxControl, {
            label: 'CheckboxControl',
            checked: atts.checkbox,
            onChange: ( value ) => {
              props.setAttributes( { checkbox: value } );
            }
          } ),

          // Multiple Checkboxes
          el( 'p', {}, 'Multiple Checkboxes' ),

          // Loop through an array and create checkbox for each
          // The triple dot is 'spread operator' which will spread the result into current array
          ...[ 'Checkbox 1', 'Checkbox 2', 'Checkbox 3' ].map( ( label ) => {
            return el( CheckboxControl, {
              label: label,
              checked: atts.checkboxes[ label ],
              onChange: ( value ) => {
                // Copy the object using Object.assign so it doesn't get tracked by React
                var copyCheckboxes = Object.assign( {}, atts.checkboxes );
                copyCheckboxes[ label ] = value;

                props.setAttributes( { checkboxes: copyCheckboxes } );
              },
            } );
          } ),

          // Radio
          el( RadioControl, {
            label: 'RadioControl',
            help: 'Some kind of description',
            options : [
              { label: 'Radio 1', value: 'radio1' },
              { label: 'Radio 2', value: 'radio2' },
              { label: 'Radio 3', value: 'radio3' },
            ],
            selected: atts.radio,
            onChange: ( value ) => {
              props.setAttributes( { radio: value } );
            },
          } ),

          // Toggle
          el( ToggleControl, {
            label: 'ToggleControl',
            checked: atts.toggle,
            onChange: ( value ) => {
              props.setAttributes( { toggle: value } );
            },
          } ),

        ), // panel2

        ///// PANEL COLOR
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
        style: { '--bgColor': atts.customBgColor, '--textColor': atts.customColor2 },
        onChange: ( value ) => { props.setAttributes( { content: value } ); }
      } )
    ];
  },

  //
  save: ( props ) => {
    return el( RichText.Content, { tagName: 'p', value: props.attributes.content } );
  },

} );
} )( window.wp.blocks, window.wp.blockEditor, window.wp.element, window.wp.components );