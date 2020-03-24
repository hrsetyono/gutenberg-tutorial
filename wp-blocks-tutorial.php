<?php
/**
 * Plugin Name: WP Blocks Tutorial
 * Description: Tutorial code for creating custom Gutenberg block in WordPress
 * Plugin URI: http://github.com/hrsetyono/wp-blocks-tutorial
 * Requires at least: 5.3
 * Requires PHP: 7.0
 * License: MIT
 * Author: Pixel Studio
 * Author URI: https://pixelstudio.id
 * Version: 1.0.0
 */

if( !defined( 'WPINC' ) ) { die; } // exit if accessed directly


require_once '01-single-field/index.php';
require_once '02-multiple-fields/index.php';
require_once '03-toolbar/index.php';