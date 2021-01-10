<?php

/**
 * Callback for rendering Tut 06b
 */
function render_tut06b( $atts ) {
  if( function_exists( 'get_current_screen' ) ) { return; }

  $class_name = 'wp-block-my-tut-06b ' . $atts['className'];
  $title = $atts['title'] ?? '';
  $image = $atts['mediaURL'] ?? '';
  $ingredients = $atts['ingredients'] ?? '';
  $steps = $atts['steps'] ?? '';

  return "<div class='$class_name'>
    <h2> $title </h2>
    <figure>
      <img src='$image'>
    </figure>
    
    <h4> Ingredients </h4>
    <ul> $ingredients </ul>

    <h4> Steps </h4>
    $steps
  </div>";
}