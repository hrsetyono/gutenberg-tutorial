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

// Choose one:
// add_action( 'enqueue_block_editor_assets', 'gutenberg_tutorial_enqueue_es5', 100 );
add_action( 'enqueue_block_editor_assets', 'gutenberg_tutorial_enqueue_esnext', 100 );

add_filter( 'safe_style_css', 'gutenberg_tutorial_allow_css_var' );
add_action( 'init', 'setup_dynamic_block_render' );


/**
 * Enqueue the ES5 version of the custom blocks
 * @action enqueue_block_editor_assets
 */
function gutenberg_tutorial_enqueue_es5() {
  $blocks = [
    '01' => '01 - single field',
    '02' => '02 - multiple fields',
    '03' => '03 - toolbar',
    '04' => '04 - sidebar',
    '04b' => '04b - more sidebar',
    '05' => '05 - nested blocks',
    '06' => '06 - dynamic block',
    '06b' => '06b - static to dynamic'
  ];

  foreach( $blocks as $name => $dir ) {
    // If this code is in Theme, replace `plugin_dir_url(__FILE__)` with `get_stylesheet_directory_uri()`
    $js_dir = plugin_dir_url( __FILE__ ) . $dir;
    $css_dir = plugin_dir_url( __FILE__ ) . $dir;

    // Register all the CSS and JS
    wp_enqueue_script( "tut-$name", "$js_dir/$name.js", [ 'wp-blocks', 'wp-dom' ] , null, true );
    wp_enqueue_style( "tut-$name", "$css_dir/$name.css", [ 'wp-edit-blocks' ] );
  }
}

/**
 * Enqueue the ESNext version of the custom blocks
 * @action enqueue_block_editor_assets
 */
function gutenberg_tutorial_enqueue_esnext() {
  // If this code is in Theme, replace `plugin_dir_url(__FILE__)` with `get_stylesheet_directory_uri()`
  $dir = plugin_dir_url( __FILE__ ) . 'esnext-build';

  wp_enqueue_script( "gutenberg-tutorial", "$dir/index.js", [ 'wp-blocks', 'wp-dom' ] , null, true );
  wp_enqueue_style( "gutenberg-tutorial", "$dir/index.css", [ 'wp-edit-blocks' ] );
}


/**
 * Fixed bug with Gutenberg not allowing custom inline-style
 * https://github.com/WordPress/gutenberg/issues/15137
 * 
 * @filter safe_style_css
 */
function gutenberg_tutorial_allow_css_var() {
  $attr[] = '--bgColor';
  $attr[] = '--textColor';
  return $attr;
}


/**
 * Server-side render for dynamic block (Tut 06 and 06b)
 * @action init
 */
function setup_dynamic_block_render() {
  require_once '06 - dynamic block/render.php';
  require_once '06b - static to dynamic/render.php';
  require_once '07 - link popup/render.php';

  register_block_type( 'my/tut-06', [
    'render_callback' => 'render_tut06',
  ] );

  register_block_type( 'my/tut-06b', [
    'render_callback' => 'render_tut06b',
  ] );

  register_block_type( 'my/tut-07', [
    'render_callback' => 'render_tut07',
  ] );
}