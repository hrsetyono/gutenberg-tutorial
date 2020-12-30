<?php

add_action( 'init', function() {
  // if Gutenberg is not active
  if ( !function_exists( 'register_block_type' ) ) { return; }

  // If this code is in Theme, replace `plugin_dir_url(__FILE__)` with `get_stylesheet_directory_uri()`
  // $js_dir = plugin_dir_url( __FILE__ ) . 'es5/';
  $js_dir = plugin_dir_url( __FILE__ ) . 'esnext-build/';
  $css_dir = plugin_dir_url( __FILE__ );

  wp_register_script( 'tut-04b', $js_dir . '04b.js', [ 'wp-blocks', 'wp-dom' ] , null, true );
  wp_register_style( 'tut-04b', $css_dir . '04b.css', [ 'wp-edit-blocks' ] );

  register_block_type( 'my/tut-04b', [
    'editor_style' => 'tut-04b',
    'editor_script' => 'tut-04b',
  ] );
} );