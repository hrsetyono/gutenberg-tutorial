/**!
 * Tutorial 07 - Using ESNext Syntax
 * 
 * Check out the README in this folder for details
 */

import { registerBlockType } from '@wordpress/blocks';
import { RichText, MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

registerBlockType( 'my/tut-07', {
  title: '07 - Converting Tut02 to JSX',
  icon: 'book',
  category: 'layout',
  example: {},
  attributes: {
    title: { type: 'array', source: 'children', selector: 'h2' },
    mediaID: { type: 'number' },
    mediaURL: { type: 'string', source: 'attribute', selector: 'img', attribute: 'src' },
    ingredients: { type: 'array', source: 'children', selector: '.ingredients' },
    steps: { type: 'array', source: 'children', selector: '.steps' },
  },
  
  // Compare this with the code from Tutorial 02
  edit( props ) {
    let atts = props.attributes;

    // Everytime you want to insert a variable / function, enclose it with curly brace
    return (
      <div className={ props.className }>
        <RichText
          tagName='h2'
          inline={ true }
          placeholder='Write Recipe title…'
          value={ atts.title }
          onChange={ value => {
            props.setAttributes( { title: value } );
          } }	/> {/* Single tag needs this closing slash */}

        <div className='recipe-image'>
          <MediaUpload
            allowedTypes='image'
            value={ atts.mediaID }
            onSelect={ media => {
              props.setAttributes( {
                mediaURL: media.url,
                mediaID: media.id
              } );
            } }
            render={ obj => {
              // multiline HTML needs to be enclosed with parentheses
              return (
                <Button
                  className={ atts.mediaID ? 'button button--transparent' : 'button' }
                  onClick={ obj.open }>
                  { atts.mediaID ? <img src={ atts.mediaURL } /> : 'Upload Image' }
                </Button>
              );
            } }
            />
        </div>

        <h3>Ingredients</h3>

        <RichText
          tagName='ul'
          multiline='li'
          placeholder='Write a list of ingredients…'
          className='ingredients'
          value={ atts.ingredients }
          onChange={ value => {
            props.setAttributes( { ingredients: value } );
          } } />

        <h3>Steps</h3>

        <RichText
          tagName='div'
          inline={ false }
          placeholder='Write instructions…'
          value={ atts.steps }
          onChange= { value => {
            props.setAttributes( { steps: value } );
          } } />
      </div>
    );
  },

  // Compare this to Tutorial 02
  save( props ) {
    let atts = props.attributes;

    return (
      <div className={ props.className }>
        <RichText.Content
          tagName='h2'
          value={ atts.title } />
        
        {/* This is an inline conditional. If mediaURL exists, then show the image */}
        { atts.mediaURL && (
          <div className='recipe-image'>
            <img src={ atts.mediaURL } />
          </div>
        ) }

        <h3>Ingredients</h3>

        <RichText.Content
          tagName='ul'
          className='ingredients'
          value={ atts.ingredients } />

        <h3>Instructions</h3>

        <RichText.Content
          tagName='div'
          className='steps'
          value={ atts.steps } />

      </div>
    );
  },
} );