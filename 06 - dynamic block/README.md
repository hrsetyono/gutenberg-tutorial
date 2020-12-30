# Tutorial 06 - Dynamic Block

A typical block saves its HTML markup directly into the database. But there are some use case when that's not possible, like Latest Posts block.

This is where **Dynamic block** comes in. It only saves the attribute into database and when the page loads, it renders the content via PHP.

## How to make Dynamic Block

A block is considered dynamic if the `save()` function returns null like this:

```js
registerBlockType({
  edit() {
    return 'something';
  }

  save() {
    return null;
  }
});
```

Now we need to specify how to render it in PHP:

```php
register_block_type( 'my/block', [
  'render_callback' => 'render_my_block',
] );

function render_my_block( $atts, $inner_blocks = null ) {
  // do something

  return 'the HTML markup';
}
```

That's it. You can try `var_dump( $atts )` to see what's inside.

**IMPORTANT:** Default attribute won't appear in `$atts`. This is quite annoying since we need to check each one whether it exists or not.

## About this Tutorial

- Learn how to make a block where the HTML markup is dynamic like Latest Posts.

- Learn how to do API Call

**TASK:**

Create a block to show latest X posts of selected category. Use `<select>` and `<input type="number">`

To make it dynamic, make `save()` returns null.

![](https://raw.github.com/hrsetyono/cdn/master/blocks-tutorial/ch06-dynamic-block.jpg)

**COMPILING ESNEXT**

Read the README in this repo's root folder.

**REFERENCE:**

- https://developer.wordpress.org/block-editor/tutorials/block-tutorial/creating-dynamic-blocks/
- https://www.youtube.com/watch?v=sYHYTk0jeE8