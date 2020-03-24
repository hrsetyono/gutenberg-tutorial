<?php

add_action( 'init', function() {
  // if Gutenberg is not active
  if ( !function_exists( 'register_block_type' ) ) {
    return;
  }

  wp_register_script( 'tut-02', plugin_dir_url( __FILE__ ) . '/02.js', [ 'wp-blocks', 'wp-dom' ] , null, true );
  wp_register_style( 'tut-02', plugin_dir_url( __FILE__ ) . '/02.css', [ 'wp-edit-blocks' ] );

  register_block_type( 'wpbt/tut-02', [
    'editor_style' => 'tut-02',
    'editor_script' => 'tut-02',
  ] );
} );