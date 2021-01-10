import './07.css';
import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';
import URLPicker from './_url-picker.js';

registerBlockType( 'my/tut-07', {
  title: '07 - Link Popup',
  description: 'Clickable card with title and description',
  icon: 'id',
  category: 'layout',
  example: {},

  attributes: {
    title: { type: 'string' },
    description: { type: 'string' },
    linkURL: { type: 'string' },
    linkTarget: { type: 'boolean', default: false }, 
  },
  
  edit: ( props ) => {
    let atts = props.attributes;

    return <>
      <URLPicker
        url={ atts.linkURL }
        setAttributes={ props.setAttributes }
        isSelected={ props.isSelected }
        opensInNewTab={ atts.linkTarget === '_blank' }

        // listener when toggling "Open in New Tab"
        onToggleOpenInNewTab={ ( value ) => {
          let linkTarget = value ? '_blank' : '_self'; // if true, it means "_blank"
          props.setAttributes({ linkTarget: linkTarget });
        } }
      />

      <div className={ props.className }>
        <RichText tagName="h3"
          placeholder="Enter card title…"
          value={ atts.title }
          // if true, this will disable the Inline Link toolbar besides Bold & Italic
          withoutInteractiveFormatting="true"
          onChange={ value => props.setAttributes({ title: value }) }
        />

        <RichText tagName="div"
          placeholder="Enter card description…"
          value={ atts.description }
          multiline="p"
          withoutInteractiveFormatting="true"
          onChange={ value => props.setAttributes({ description: value }) }
        />
      </div>
    </>
  },
  
  save: ( props ) => {
    return null;
  }
} );
