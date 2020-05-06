<?php

add_action( 'init', function() {
  // if Gutenberg is not active
  if ( !function_exists( 'register_block_type' ) ) {
    return;
  }

  // If this code is in Theme, replace this with `get_stylesheet_directory_uri()`
  $js_dir = plugin_dir_url( __FILE__ );
  $css_dir = plugin_dir_url( __FILE__ );

  wp_register_script( 'tut-02', $js_dir . '/02.js', [ 'wp-blocks', 'wp-dom' ] , null, true );
  wp_register_style( 'tut-02', $css_dir . '/02.css', [ 'wp-edit-blocks' ] );

  register_block_type( 'wpbt/tut-02', [
    'editor_style' => 'tut-02',
    'editor_script' => 'tut-02',
  ] );
} );