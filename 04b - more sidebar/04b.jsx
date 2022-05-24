/**
 * Tutorial 04b - More Inspector Controls
 *
 * Check out the README in this folder for details
 */
import './04b.css';
import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, CheckboxControl, RadioControl, SelectControl, TextareaControl, RangeControl } from '@wordpress/components';

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

    return (
      <>
        {/* <> is called Fragment, used to satisfy React's requirement of having 1 wrapper */}

        <InspectorControls>
          {/* PANEL 1 */}
          <PanelBody title="Panel 1" initialOpen="false">
            {/* Text Field */}
            <TextControl
              value={atts.text}
              label="TextControl"
              onChange={(value) => {
                props.setAttributes({ text: value });
              }}
            />

            {/* Textarea */}
            <TextareaControl
              value={atts.textarea}
              label="TextareaControl"
              onChange={(value) => {
                props.setAttributes({ textarea: value });
              }}
            />

            {/* Select Dropdown */}
            <SelectControl
              value={atts.select}
              label="SelectControl"
              options={[
                { label: 'Option 1', value: 'option1' },
                { label: 'Option 2', value: 'option2' },
                { label: 'Option 3', value: 'option3' },
              ]}
              onChange={(value) => {
                props.setAttributes({ select: value });
              }}
            />

            {/* Range */}
            <RangeControl
              value={atts.range}
              label="RangeControl"
              min="1"
              max="10"
              onChange={(value) => {
                props.setAttributes({ range: value });
              }}
            />
          </PanelBody>

          {/* PANEL 2 */}
          <PanelBody title="Panel 2" initialOpen="false">
            {/* Single Checkboxes */}
            <CheckboxControl
              checked={atts.checkbox}
              label="CheckboxControl"
              onChange={(value) => {
                props.setAttributes({ checkbox: value });
              }}
            />

            {/* Radio */}
            <RadioControl
              selected={atts.radio}
              label="RadioControl"
              help="Some kind of description"
              options={[
                { label: 'Radio 1', value: 'radio1' },
                { label: 'Radio 2', value: 'radio2' },
                { label: 'Radio 3', value: 'radio3' },
              ]}
              onChange={(value) => {
                props.setAttributes({ radio: value });
              }}
            />

            {/* Toggle */}
            <ToggleControl
              checked={atts.toggle}
              label="ToggleControl"
              onChange={(value) => {
                props.setAttributes({ toggle: value });
              }}
            />
          </PanelBody>

        </InspectorControls>

        <p>
          Take a look at the right Sidebar »
        </p>
      </>
    );
  },

  /**
   * Returns nothing because this block is just to showcase various Controls in sidebar
   */
  save: () => null,
});

/**
* That's all folks!
* If you spot a mistake or want to request a topic, let me know in https://github.com/hrsetyono/gutenberg-tutorial/issues
*/
