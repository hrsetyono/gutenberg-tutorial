<?php
/**
 * Callback for rendering Tut 06
 */
function render_tut06( $atts ) {
  // prevent loading in Editor screen
  if( function_exists( 'get_current_screen' ) ) { return; }

  $selected_category = $atts['selectedCategory'] ?? null;
  $posts_per_page = $atts['postsPerPage'] ?? 3;

  $posts = get_posts([
    'cat' => $selected_category,
    'posts_per_page' => $posts_per_page,
  ]);

  $content = '';

  // Loop all posts
  foreach( $posts as $p ) {
    $title = $p->post_title;
    $excerpt = $p->post_excerpt;
    $permalink = get_permalink( $p );
    $thumbnail = get_the_post_thumbnail( $p, 'thumbnail' );

    $content .= "<div class='wp-block-my-tut-06'>
      <h2> <a href='$permalink'> $title </a></h2>
      $thumbnail
      <p> $excerpt </p>
    </div>";
  }

  return $content;
}
