<?php

add_action( 'init', function() {
  // if Gutenberg is not active
  if ( !function_exists( 'register_block_type' ) ) {
    return;
  }

  wp_register_script( 'tut-04b', plugin_dir_url( __FILE__ ) . '/04b.js', [ 'wp-blocks', 'wp-dom' ] , null, true );
  wp_register_style( 'tut-04b', plugin_dir_url( __FILE__ ) . '/04b.css', [ 'wp-edit-blocks' ] );

  register_block_type( 'wpbt/tut-04b', [
    'editor_style' => 'tut-04b',
    'editor_script' => 'tut-04b',
  ] );
} );