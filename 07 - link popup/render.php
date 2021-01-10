<?php

/**
 * Callback for rendering Tut 07
 */
function render_tut07( $atts ) {
  if( function_exists( 'get_current_screen' ) ) { return; }

  $class_name = 'wp-block-my-tut-07 ' . $atts['className'];
  $title = $atts['title'] ? '<h3>' . $atts['title'] . '</h3>' : '';
  $description = $atts['description'] ? '<div>' . $atts['description'] . '</div>' : '';
  $link_url = $atts['linkURL'] ?? '';
  $link_target = $atts['linkTarget'] ?? '_self'; 

  if( $link_url ) {
    return "<a href='$link_url' target='$link_target'> $title $description </a>";
  } else {
    return "<div href='$link_url' target='$link_target'> $title $description </div>"; 
  }
}