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
 * Version: 1.0.0
 */

if( !defined( 'WPINC' ) ) { die; } // exit if accessed directly


require_once '01-single-field/index.php';
require_once '02-multiple-fields/index.php';
require_once '03-toolbar/index.php';
require_once '04-sidebar/index.php';
require_once '04b-more-sidebar/index.php';
require_once '04c-custom-colors/index.php';
require_once '05-nested-blocks/index.php';
require_once '06-dynamic-block/index.php';
require_once '06b-dynamic-block-pt2/index.php';
require_once '07-using-esnext/index.php';