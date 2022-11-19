# WP Gutenberg Development Tutorial

Learn how to make a custom Gutenberg block from scratch!

This is a working WordPress plugin. You can activate it on your site and test it.

We made three versions of each chapter:

1. **Plain JS** - No compilation needed and only using Gutenberg library.
1. **JS with HTM** - No compilation needed but using HTM Library to write React template with string concatenation.
1. **JSX** - need to compile using node packages.

> This tutorial is sponsored by [wpTips.dev](https://wptips.dev) - WordPress tutorials for developer.

## Differences Between Versions

The main difference is how you write the React template. Here's an overview of each:

**Plain JS**:

```js
const el = window.wp.element.createElement;
const { RichText } = window.wp.blockEditor;

return (
  el(RichText, {
    tagName:"h2",
    value: atts.content,
  })
);
```

**JS with HTM**:

```js
const html = window.htm.bind(window.wp.element.createElement);
const { RichText } = window.wp.blockEditor;

return html`
  <${RichText}
    tagName="h2"
    value=${atts.content}
  />
`;
```

**JSX**:

```js
import { RichText } from '@wordpress/block-editor';

return (
  <RichText
    tagName="h2"
    value={atts.content}
  />
);
```

## Which One is the Best?

In my opinion, the choice is **either HTM or JSX**. Plain JS is a mess when you have lots of elements.

Here are the pros and cons of them:

**HTM:**

- (Pro) Easier to get started. Doesn't need to install any additional software.
- (Con) Harder to debug since the error console can't detect which line is problematic.
- (Con) Harder to find information online since most of them are using JSX.

JSX:

- (Pro) Simpler, cleaner, and lighter (minified) code.
- (Pro) Can support older browser after compiled.
- (Pro) More commonly used in Gutenberg community compared to ES5.
- (Con) Can take a while to setup, especially if you're not familiar with NPM.

In conclusion, it's about speed and scale of the project.

## How to Compile JSX

1. Download and Install [NodeJS](https://nodejs.org/en/).

1. Open command prompt / terminal in this directory and run the command `npm install`.

1. During development, run the command `npm run dev` to automatically recompile everytime we save any changes.

1. After finished developing, run the command `npm run build` to minimize the compiled code.

## Enqueuing HTM Library

If you want to use HTM, don't forget to enqueue the library. You can find it in `/dist/htm.js`.

```php
add_action('enqueue_block_editor_assets', 'my_enqueue_htm');

function my_enqueue_htm() {
  $dir = get_stylesheet_directory_uri();
  wp_enqueue_script('htm', $dir . '/js/htm.js', [] , null, true);
}
```

-----

# Table of Content

![](https://raw.github.com/hrsetyono/cdn/master/blocks-tutorial/ch02-multiple-richtext.jpg)

- **[Tutorial 0](https://github.com/hrsetyono/gutenberg-tutorial/tree/master/00%20-%20javascript%20es5%20syntax) - JavaScript ES5 Syntax (Optional)**

  If you are not too familiar with the new JavaScript syntax, start here.

- **[Tutorial 01](https://github.com/hrsetyono/gutenberg-tutorial/tree/master/01%20-%20single%20field) - Single Field**

    Create a block containing a single input field with rich formatting.

- **[Tutorial 02](https://github.com/hrsetyono/gutenberg-tutorial/tree/master/02%20-%20multiple%20fields) - Multiple Fields**

    Make a block for Cooking Recipe with 4 fields: Title, Image, Ingredients, and Steps.

- **[Tutorial 03](https://github.com/hrsetyono/gutenberg-tutorial/tree/master/03%20-%20toolbar) - Custom Toolbar**

    Learn how to add custom buttons into the Toolbar.

- **[Tutorial 04](https://github.com/hrsetyono/gutenberg-tutorial/tree/master/04%20-%20sidebar) - Custom Sidebar (Inspector)**

    Learn about adding field and buttons into the Sidebar.

- **[Tutorial 04b](https://github.com/hrsetyono/gutenberg-tutorial/tree/master/04b%20-%20more%20sidebar) - More Inspector Controls**

    Learn about various type of built-in controls:

- **[Tutorial 05](https://github.com/hrsetyono/gutenberg-tutorial/tree/master/05%20-%20nested%20blocks) - Nested Blocks**

    Create a block containing Heading, Paragraph, and Image blocks by default.

- **[Tutorial 06](https://github.com/hrsetyono/gutenberg-tutorial/tree/master/06%20-%20dynamic%20block) - Dynamic Block**

    Create a block to show latest X posts of selected category.

- **[Tutorial 06b](https://github.com/hrsetyono/gutenberg-tutorial/tree/master/06b%20-%20static%20to%20dynamic) - Static to Dynamic**

    Transform the Cooking Recipe from Tutorial 02 into dynamic block.

- **[Tutorial 07](https://github.com/hrsetyono/gutenberg-tutorial/tree/master/07%20-%20link%20popup) - Link Popup**

    Create a Popup to add link

-----

> If you spot a mistake or want to request a topic, let me know in [Issues](https://github.com/hrsetyono/gutenberg-tutorial/issues)

> Learn more about Wordpress at our tutorial site: [wpTips.dev](https://wptips.dev)
