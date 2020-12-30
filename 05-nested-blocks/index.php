<?php

add_action( 'init', function() {
  // if Gutenberg is not active
  if ( !function_exists( 'register_block_type' ) ) { return; }

  // If this code is in Theme, replace `plugin_dir_url(__FILE__)` with `get_stylesheet_directory_uri()`
  $js_dir = plugin_dir_url( __FILE__ ) . 'es5/';
  // $js_dir = plugin_dir_url( __FILE__ ) . 'esnext-build/';
  $css_dir = plugin_dir_url( __FILE__ );

  wp_register_script( 'tut-05', $js_dir . '05.js', [ 'wp-blocks', 'wp-dom' ] , null, true );
  wp_register_style( 'tut-05', $css_dir . '05.css', [ 'wp-edit-blocks' ] );

  register_block_type( 'my/tut-05', [
    'editor_style' => 'tut-05',
    'editor_script' => 'tut-05',
  ] );
} );