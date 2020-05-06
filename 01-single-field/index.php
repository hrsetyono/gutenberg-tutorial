<?php

add_action( 'init', function() {
  // if Gutenberg is not active
  if ( !function_exists( 'register_block_type' ) ) {
    return;
  }

  // If this code is in Theme, replace this with `get_stylesheet_directory_uri()`
  $js_dir = plugin_dir_url( __FILE__ );
  $css_dir = plugin_dir_url( __FILE__ );

  wp_register_script( 'tut-01', $js_dir . '/01.js', [ 'wp-blocks', 'wp-dom' ] , null, true );
  wp_register_style( 'tut-01', $css_dir . '/01.css', [ 'wp-edit-blocks' ] );

  register_block_type( 'wpbt/tut-01', [
    'editor_style' => 'tut-01',
    'editor_script' => 'tut-01',
  ] );
} );