/**
 * Tutorial 03 - Custom Toolbar
 * 
 * Check out the README in this folder for details
 */
import { registerBlockType } from '@wordpress/blocks';
import { RichText, MediaUpload, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { Button, ToolbarGroup, ToolbarButton } from '@wordpress/components';

registerBlockType( 'my/tut-03', {
  title: '03 - Custom Toolbar',
  icon: 'book',
  category: 'layout',

  //
  attributes: {
    title: { type: 'array', source: 'children', selector: 'h2' },
    mediaID: { type: 'number' },
    mediaURL: { type: 'string', source: 'attribute', selector: 'img', attribute: 'src' },
    ingredients: { type: 'array', source: 'children', selector: '.ingredients' },
    steps: { type: 'array', source: 'children', selector: '.steps' },

    // Attributes for toolbar
    align: { type: 'string', default: 'none' },
    imagePosition: { type: 'string', default: 'right' }
  },

  //
  example: {
    attributes: {
      title: 'Chocolate Chip Cookies',
      mediaURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/320px-2ChocolateChipCookies.jpg',
      ingredients: [ 'flour', 'sugar', 'chocolate' ],
      steps: [	'Mix', 'Bake', 'Enjoy' ],
      
      align: 'left',
      imagePosition: 'right',
    },
  },

  //
  edit: function( props ) {
    let atts = props.attributes;
    
    return <> {/* This is a Fragment, it's here to satisfy React requirement of returning single-parent */}
      {/* If BlockControls is returned, it will be added to the toolbar */}
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton title="Image on Right"
            // Icon list https://developer.wordpress.org/resource/dashicons/ 
            icon="align-right"
            // active state for the buttons
            className={ atts.imagePosition === 'right' ? 'is-pressed' : '' }
            onClick={ () => props.setAttributes( { imagePosition: 'right' } ) }
          />

          <ToolbarButton title="Image on Left"
            icon="align-left"
            className={ atts.imagePosition === 'left' ? 'is-pressed' : '' }
            onClick={ () => props.setAttributes( { imagePosition: 'left' } ) }
          />
        </ToolbarGroup>

        <AlignmentToolbar value={ atts.align }
          onChange={ value => props.setAttributes( { align: value ? value : 'none' } ) }
        />
      </BlockControls>


      {/* add extra class name based on selected toolbar */}
      <div className={ `${props.className}
        image-${atts.imagePosition}
        has-text-align-${atts.align}` }>
        
        {/* The rest is the same as Tut 02 */}
        <RichText tagName="h2" inline="true"
          placeholder="Write Recipe title…" value={ atts.title }
          onChange={ value => props.setAttributes( { title: value } ) }
        />
      
        <figure>
          <MediaUpload allowedTypes="image" value={ atts.mediaID }
            onSelect={ media => props.setAttributes( { mediaURL: media.url, mediaID: media.id } ) }
            render={ ( obj ) => {
              let className = atts.mediaID	? 'button button--transparent' : 'button';
              let buttonContent = atts.mediaID ?
                <img src={ atts.mediaURL } /> : 'Upload Image';
              return <Button className={ className } onClick={ obj.open }> { buttonContent } </Button>
            } }
          />
        </figure>

        <h3> Ingredients </h3>
        <RichText tagName="ul" multiline="li" className="ingredients"
          placeholder="Write a list of ingredients…" value={ atts.ingredients }
          onChange={ value => props.setAttributes( { ingredients: value } ) }
        />
      
        <h3> Steps </h3>
        <RichText tagName="div" multiline="p" inline="false"
          placeholder="Write instructions…" value={ atts.steps }
          onChange={ value => props.setAttributes( { steps: value } ) }
        />
      </div>

    {/* Closing fragment */}
    </>;
  },

  //
  save: function( props ) {
    let atts = props.attributes;

    // Add extra class name based on selected toolbar
    return <div className={ `image-${atts.imagePosition} has-text-align-${atts.align}` }>
      
      <RichText.Content tagName="h2" value={ atts.title } />
      { atts.mediaURL && <figure> <img src={ atts.mediaURL } /> </figure> }
      <h3> Ingredients </h3>
      <RichText.Content tagName="ul" className="ingredients" value={ atts.ingredients } />
      <h3> Instructions </h3>
      <RichText.Content tagName="div" className="steps" value={ atts.steps } />
    </div>
  },

} );

/*
  That's all folks!
  
  If you spot a mistake or want to request a topic, let me know in https://github.com/hrsetyono/wp-blocks-tutorial/issues
*/