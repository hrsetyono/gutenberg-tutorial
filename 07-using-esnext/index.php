<?php

add_action( 'init', function() {
  // if Gutenberg is not active
  if ( !function_exists( 'register_block_type' ) ) {
    return;
  }

  wp_register_script( 'tut-07', plugin_dir_url( __FILE__ ) . '/07.js', [ 'wp-blocks', 'wp-dom' ] , null, true );
  wp_register_style( 'tut-07', plugin_dir_url( __FILE__ ) . '/07.css', [ 'wp-edit-blocks' ] );

  register_block_type( 'wpbt/tut-07', [
    'editor_style' => 'tut-07',
    'editor_script' => 'tut-07',
  ] );
} );