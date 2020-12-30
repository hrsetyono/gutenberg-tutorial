# WP Gutenberg Development Tutorial

Learn how to make custom block from the very basic!

**This repo is a working plugin.** You can download and activate it in your WordPress local installation to test it.

> Learn more about Wordpress at our tutorial site: [wpTips.dev](https://wptips.dev)


## Two Versions

Each tutorial has 2 versions: **ES5** (no compilation needed) and **ESNext** (need to compile).

The ES5 is placed under `/es5` folder while the esnext source code is inside `/esnext-src` folder. `/esnext-build` is for the compiled output.

Here's how to compile ESNext:

1. Download and Install [NodeJS](https://nodejs.org/en/).
1. Open command prompt / terminal in this directory and run the command `npm install`.
1. Check out `package.json`, it has list of available scripts.

    **For example:** To compile Tutorial 01, we use the command `npm run watch01`. It will automatically compile whenever the src file is changed. After finish, run `npm run build01` to minimize the compiled script.

> To change which JS file to enqueue, edit `index.php` in respective folder.

-----

# Table of Content

![](https://raw.github.com/hrsetyono/cdn/master/blocks-tutorial/ch02-multiple-richtext.jpg)

- **[Tutorial 0](https://github.com/hrsetyono/gutenberg-tutorial/tree/master/00-javascript-es5) - JavaScript ES5 Syntax (Optional)**

  If you are not too familiar with the new JavaScript syntax, start here.

- **[Tutorial 01](https://github.com/hrsetyono/gutenberg-tutorial/tree/master/01-single-field) - Single Field**

    Create a block containing a single input field with rich formatting.

- **[Tutorial 02](https://github.com/hrsetyono/gutenberg-tutorial/tree/master/02-multiple-fields) - Multiple Fields**

    Make a block for Cooking Recipe with 4 fields: Title, Image, Ingredients, and Steps.

- **[Tutorial 03](https://github.com/hrsetyono/gutenberg-tutorial/tree/master/03-toolbar) - Custom Toolbar**

    Learn how to add custom buttons into the Toolbar.

- **[Tutorial 04](https://github.com/hrsetyono/gutenberg-tutorial/tree/master/04-sidebar) - Custom Sidebar (Inspector)**

    Learn about adding field and buttons into the Sidebar.

- **[Tutorial 04b](https://github.com/hrsetyono/gutenberg-tutorial/tree/master/04b-more-sidebar) - More Inspector Controls**

    Learn about various type of built-in controls:

- **[Tutorial 05](https://github.com/hrsetyono/gutenberg-tutorial/tree/master/05-nested-blocks) - Nested Blocks**

    Create a block containing Heading, Paragraph, and Image blocks by default.

- **[Tutorial 06](https://github.com/hrsetyono/gutenberg-tutorial/tree/master/06-dynamic-block) - Dynamic Block**

    Create a block to show latest X posts of selected category.

- **[Tutorial 06b](https://github.com/hrsetyono/gutenberg-tutorial/tree/master/06b-dynamic-block-pt2) - Dynamic Block (Part 2)**

    Transform the Cooking Recipe from Tutorial 02 into dynamic block.

- **[Tutorial 07](https://github.com/hrsetyono/gutenberg-tutorial/tree/master/07-using-webpack) - Using Webpack**

    Use Webpack to compile the React script

- **Tutorial 08 - Link and Popup**

    Coming soon

-----

> If you spot a mistake or want to request a topic, let me know in [Issues](https://github.com/hrsetyono/wp-blocks-tutorial/issues)


> Learn more about Wordpress at our tutorial site: [wpTips.dev](https://wptips.dev)