<?php

add_action( 'init', function() {
  // if Gutenberg is not active
  if ( !function_exists( 'register_block_type' ) ) {
    return;
  }

  wp_register_script( 'tut-06', plugin_dir_url( __FILE__ ) . '/06.js', [ 'wp-blocks', 'wp-dom' ] , null, true );
  wp_register_style( 'tut-06', plugin_dir_url( __FILE__ ) . '/06.css', [ 'wp-edit-blocks' ] );

  register_block_type( 'wpbt/tut-06', [
    'editor_style' => 'tut-06',
    'editor_script' => 'tut-06',
    'render_callback' => 'render_tut06_block',
  ] );
} );


/**
 * Render the content of Tutorial 06 Block
 */
function render_tut06_block( $atts ) {
  // prevent loading in Editor screen
  if( function_exists( 'get_current_screen' ) ) { return; }

  $posts = get_posts([
    'cat' => $atts['selectedCategory'],
    'posts_per_page' => $atts['postsPerPage'],
  ]);

  $content = '';

  ob_start(); // 

  // Loop all posts
  foreach( $posts as $p ) {
    $title = $p->post_title;
    $excerpt = $p->post_excerpt;
    $permalink = get_permalink( $p );
    $thumbnail = get_the_post_thumbnail( $p, 'thumbnail' );

    $content .= "<div class='post-thumb'>
      <h2> <a href='{$permalink}'> {$title} </a></h2>
      {$thumbnail}
      <p>{$excerpt}</p>
    </div>";
  }

  echo $content;

  return ob_get_clean(); // prevent error when updating, I'm honestly not sure how
}