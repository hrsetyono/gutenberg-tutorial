/**
 * Tutorial 04b - More Inspector Controls
 *
 * Check out the README in this folder for details
 */
(() => {
  const el = window.wp.element.createElement;
  const { registerBlockType } = window.wp.blocks;
  const { InspectorControls } = window.wp.blockEditor;
  const { PanelBody, TextControl, ToggleControl, CheckboxControl, RadioControl, SelectControl, TextareaControl, RangeControl } = window.wp.components;

  registerBlockType('my/tut-04b', {
    title: '04b - More Inspector Controls',
    icon: 'book',
    category: 'layout',
    example: {},

    attributes: {
      text: { type: 'string' },
      textarea: { type: 'string' },
      select: { type: 'string' },
      range: { type: 'integer', default: 5 },

      checkbox: { type: 'boolean', default: true },
      radio: { type: 'string', default: 'radio1' },
      toggle: { type: 'boolean', default: true },
    },

    //
    edit: (props) => {
      const atts = props.attributes;

      return [
        el(
          InspectorControls,
          {},
          // PANEL 1
          el(
            PanelBody,
            { title: 'Panel 1', initialOpen: false },

            // Text Field
            el(TextControl, {
              value: atts.text,
              label: 'TextControl',
              onChange: (value) => {
                props.setAttributes({ text: value });
              },
            }),

            // Textarea
            el(TextareaControl, {
              value: atts.textarea,
              label: 'TextareaControl',
              onChange: (value) => {
                props.setAttributes({ textarea: value });
              },
            }),

            // Select Dropdown
            el(SelectControl, {
              value: atts.select,
              label: 'SelectControl',
              options: [
                { label: 'Option 1', value: 'option1' },
                { label: 'Option 2', value: 'option2' },
                { label: 'Option 3', value: 'option3' },
              ],
              onChange: (value) => {
                props.setAttributes({ select: value });
              },
            }),

            // Range
            el(RangeControl, {
              value: atts.range,
              label: 'RangeControl',
              min: 1,
              max: 10,
              onChange: (value) => {
                props.setAttributes({ range: value });
              },
            }),

          ),

          // PANEL 2
          el(
            PanelBody,
            { title: 'Panel 2', initialOpen: false },

            // Single Checkboxes
            el(CheckboxControl, {
              checked: atts.checkbox,
              label: 'CheckboxControl',
              onChange: (value) => {
                props.setAttributes({ checkbox: value });
              },
            }),

            // Radio
            el(RadioControl, {
              selected: atts.radio,
              label: 'RadioControl',
              help: 'Some kind of description',
              options: [
                { label: 'Radio 1', value: 'radio1' },
                { label: 'Radio 2', value: 'radio2' },
                { label: 'Radio 3', value: 'radio3' },
              ],
              onChange: (value) => {
                props.setAttributes({ radio: value });
              },
            }),

            // Toggle
            el(ToggleControl, {
              checked: atts.toggle,
              label: 'ToggleControl',
              onChange: (value) => {
                props.setAttributes({ toggle: value });
              },
            }),
          ), // panel2
        ),

        el('p', {}, 'Take a look at the right Sidebar »'),
      ];
    },

    /**
     * Returns nothing because this block is just to showcase various Controls in sidebar
     */
    save: () => null,

  });
})();

/**
 * That's all folks!
 * If you spot a mistake or want to request a topic, let me know in https://github.com/hrsetyono/gutenberg-tutorial/issues
 */
