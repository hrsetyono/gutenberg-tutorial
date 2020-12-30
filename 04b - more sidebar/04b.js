/**
 * Tutorial 04b - More Inspector Controls
 * 
 * Check out the README in this folder for details
 */
( function( blocks, editor, element, components ) { 'use strict';

const el = element.createElement;
const { RichText, InspectorControls } = editor;
const { PanelBody, TextControl, ToggleControl, CheckboxControl, RadioControl, SelectControl, TextareaControl, RangeControl } = components;

blocks.registerBlockType( 'my/tut-04b', {
  title: '04b - More Inspector Controls',
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
  },

  example: {},

  //
  edit: ( props ) => {
    let atts = props.attributes;

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
          // The triple dot is 'spread operator' which will merge the result into current array
          ...[ 'Checkbox 1', 'Checkbox 2', 'Checkbox 3' ].map( ( label ) => {
            return el( CheckboxControl, {
              label: label,
              checked: atts.checkboxes[ label ],
              onChange: ( value ) => {
                // Copy the object using Object.assign so it doesn't get tracked by React
                let copyCheckboxes = Object.assign( {}, atts.checkboxes );
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

      ),

      el( RichText, {
        tagName: 'p',
        className: props.className,
        value: atts.content,
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


/*
  That's all folks!
  
  If you spot a mistake or want to request a topic, let me know in https://github.com/hrsetyono/wp-blocks-tutorial/issues
*/