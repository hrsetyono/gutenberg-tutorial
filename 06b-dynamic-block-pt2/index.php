<?php

add_action( 'init', function() {
  // if Gutenberg is not active
  if ( !function_exists( 'register_block_type' ) ) {
    return;
  }

  wp_register_script( 'tut-06b', plugin_dir_url( __FILE__ ) . '/06b.js', [ 'wp-blocks', 'wp-dom' ] , null, true );
  wp_register_style( 'tut-06b', plugin_dir_url( __FILE__ ) . '/06b.css', [ 'wp-edit-blocks' ] );

  register_block_type( 'wpbt/tut-06b', [
    'editor_style' => 'tut-06b',
    'editor_script' => 'tut-06b',
    'render_callback' => 'render_tut06b_block',
  ] );
} );


/**
 * Render the content of Tutorial 06b Block
 * 
 * @param $content - This is the InnerBlocks which we use for Steps.
 */
function render_tut06b_block( $atts, $content ) {

  if( function_exists( 'get_current_screen' ) ) { return; }

  
  $title = isset( $atts['title']) ? "<h2>{$atts['title']}</h2>" : '';
  $image = isset( $atts['mediaURL'] ) ? "<img src='{$atts['mediaURL']}'>" : '';
  $ingredients = isset( $atts['ingredients'] ) ? "<ul>{$atts['ingredients']}</ul>" : '';

  ob_start();

  echo "<div class='recipe'>
    {$title}
    <h4> Ingredients </h4>
    {$ingredients}
    {$image}
    <h4> Steps </h4>
    {$content}
  </div>";

  return ob_get_clean(); // prevent error when updating, I'm honestly not sure how
}