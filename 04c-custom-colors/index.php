<?php

add_action( 'init', function() {
  // if Gutenberg is not active
  if ( !function_exists( 'register_block_type' ) ) {
    return;
  }

  wp_register_script( 'tut-04c', plugin_dir_url( __FILE__ ) . '/04c.js', [ 'wp-blocks', 'wp-dom' ] , null, true );
  wp_register_style( 'tut-04c', plugin_dir_url( __FILE__ ) . '/04c.css', [ 'wp-edit-blocks' ] );

  register_block_type( 'wpbt/tut-04c', [
    'editor_style' => 'tut-04c',
    'editor_script' => 'tut-04c',
  ] );
} );