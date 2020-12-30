<?php
/**
 * Plugin Name: Gutenberg Tutorial
 * Description: Tutorial code for creating custom Gutenberg block in WordPress
 * Plugin URI: http://github.com/hrsetyono/gutenberg-tutorial
 * Requires at least: 5.3
 * Requires PHP: 7.0
 * License: MIT
 * Author: Pixel Studio
 * Author URI: https://pixelstudio.id
 * Version: 1.1.0
 */

if( !defined( 'WPINC' ) ) { die; } // exit if accessed directly


add_action( 'init', function() {
  // if Gutenberg is not active
  if ( !function_exists( 'register_block_type' ) ) { return; }

  // If this code is in Theme, replace `plugin_dir_url(__FILE__)` with `get_stylesheet_directory_uri()`
  $js_dir = plugin_dir_url( __FILE__ ) . 'esnext-build/';
  $css_dir = plugin_dir_url( __FILE__ ) . 'css/';

  $blocks = ['01', '02', '03', '04', '04b', '05', '06', '06b' ];

  foreach( $blocks as $name ) {
    // Register all the CSS and JS
    wp_register_script( "tut-$name", "$js_dir/$name.js", [ 'wp-blocks', 'wp-dom' ] , null, true );
    wp_register_style( "tut-$name", "$css_dir/$name.css", [ 'wp-edit-blocks' ] );

    // Register blocks
    register_block_type( "my/tut-$name", [
      'editor_style' => "tut-$name",
      'editor_script' => "tut-$name",
    ] );
  }
} );