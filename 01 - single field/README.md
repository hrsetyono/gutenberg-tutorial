# Tutorial 01 - Single Field

In our first tutorial we will make a custom text field in Gutenberg.

First step is to enqueue a JavaScript file. So put this into `functions.php`:

```php
add_action('enqueue_block_editor_assets', 'my_custom_blocks', 100);

function my_custom_blocks() {
  $js_dir = plugin_dir_url(__FILE__) . 'assets/js';
  $css_dir = plugin_dir_url(__FILE__) . 'assets/css';

  // If this code is inside a theme, use `get_stylesheet_directory_uri()` instead
  // $js_dir = get_stylesheet_directory_uri() . '/assets/js';
  // $css_dir = get_stylesheet_directory_uri() . '/assets/css';

  // Register all the CSS and JS
  wp_enqueue_script('my-block', $js_dir . '/my-block.js', [ 'wp-blocks', 'wp-dom' ] , null, true);
  wp_enqueue_style('my-block', $css_dir . '/my-block.css', [ 'wp-edit-blocks' ]);
}
```

And then create a JS file with the same name as specified above:

```js
wp.blocks.registerBlockType('my/tut-01', {
  // the arguments
});
```

There are 3 important arguments:

- `attributes` (Object) - The block's data.
- `edit` (Function) - Return what is shown in the editor.
- `save` (Function) - Return what is saved in the database.

That's the basic of it, start reading `01.js` to see how each argument is implemented.


## About this tutorial
  
- Learn the basic of creating custom block.

- Introduces the concept of attributes.

- Learn about RichText field

**TASK:**

Create a block containing a single input field with rich formatting.

![](https://raw.github.com/hrsetyono/cdn/master/blocks-tutorial/ch01-richtext.jpg)

**COMPILING ESNEXT**

Read the README in this repo's root folder.

**REFERENCE:**

- https://github.com/WordPress/gutenberg-examples

- https://developer.wordpress.org/block-editor/developers/block-api/block-attributes/