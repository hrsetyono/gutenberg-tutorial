<?php
if (!defined('WPINC')) { die; } // exit if accessed directly

register_block_type('my/tut-07', [
  'render_callback' => 'my_render_tut07',
]);

/**
 * Callback for rendering Tut 07
 */
function my_render_tut07( $atts ) {
  if( function_exists( 'get_current_screen' ) ) { return; }

  $class_name = 'wp-block-my-tut-07 ' . $atts['className'];
  $title = $atts['title'] ? '<h3>' . $atts['title'] . '</h3>' : '';
  $description = $atts['description'] ? '<div>' . $atts['description'] . '</div>' : '';
  $link_url = $atts['linkURL'] ?? '';

  if( $link_url ) {
    return "<a href='$link_url' target='$link_target'>
      $title
      $description
    </a>";
  } else {
    $link_target = $atts['linkTarget'] ?? '_self'; 

    return "<div href='$link_url' target='$link_target'>
      $title
      $description
    </div>"; 
  }
}