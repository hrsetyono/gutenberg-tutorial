import './07.css';
import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';
import URLPicker from './_url-picker.jsx';

registerBlockType('my/tut-07', {
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

  edit: (props) => {
    const atts = props.attributes;

    return (
      <>
        <URLPicker
          url={atts.linkURL}
          setAttributes={props.setAttributes}
          isSelected={props.isSelected}
          opensInNewTab={atts.linkTarget === '_blank'}
          // listener when toggling "Open in New Tab"
          onToggleOpenInNewTab={(value) => {
            const linkTarget = value ? '_blank' : '_self'; // if true, it means "_blank"
            props.setAttributes({ linkTarget });
          }}
        />

        <div className={props.className}>
          <RichText
            value={atts.title}
            tagName="h3"
            placeholder="Enter card title…"
            // if true, this will disable the Inline Link toolbar besides Bold & Italic
            withoutInteractiveFormatting="true"
            onChange={(value) => {
              props.setAttributes({ title: value });
            }}
          />

          <RichText
            value={atts.description}
            tagName="div"
            placeholder="Enter card description…"
            multiline="p"
            withoutInteractiveFormatting="true"
            onChange={(value) => {
              props.setAttributes({ description: value });
            }}
          />
        </div>
      </>
    );
  },

  /**
   * Returns nothing because this is dynamic block and will be rendered via PHP
   */
  save: () => null,
});

/**
* That's all folks!
* If you spot a mistake or want to request a topic, let me know in https://github.com/hrsetyono/gutenberg-tutorial/issues
*/
