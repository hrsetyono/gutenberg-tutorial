<?php

add_action( 'init', function() {
  // if Gutenberg is not active
  if ( !function_exists( 'register_block_type' ) ) {
    return;
  }

  wp_register_script( 'tut-03', plugin_dir_url( __FILE__ ) . '/03.js', [ 'wp-blocks', 'wp-dom' ] , null, true );
  wp_register_style( 'tut-03', plugin_dir_url( __FILE__ ) . '/03.css', [ 'wp-edit-blocks' ] );

  register_block_type( 'wpbt/tut-03', [
    'editor_style' => 'tut-03',
    'editor_script' => 'tut-03',
  ] );
} );