# WP Gutenberg Development Tutorial

Learn how to make custom block from the very basic!

Summary:

- **This repo is a working plugin.** You can download and activate it in your WordPress local installation to test it.

- All codes use old ES5 syntax until Tutorial 07.

- All important parts are commented in the code.

> If you spot a mistake or want to request a topic, let me know in [Issues](https://github.com/hrsetyono/wp-blocks-tutorial/issues)

## Tutorial 00 - JavaScript ES5 Syntax (Optional)

If you are not too familiar with the new JavaScript syntax, start here.

Topics covered:

1. Self Invoking Function
1. Let and Const
1. Use Strict
1. Arrow Function
1. Destructuring Assigment
1. Spread Operator
1. Array Map
1. React Element

## Tutorial 01 - Single Field

Create a block containing a single input field with rich formatting.

![](https://raw.github.com/hrsetyono/cdn/master/blocks-tutorial/ch01-richtext.jpg)


## Tutorial 02 - Multiple Fields

Make a block for Cooking Recipe with 4 fields: Title, Image, Ingredients, and Steps.

![](https://raw.github.com/hrsetyono/cdn/master/blocks-tutorial/ch02-multiple-richtext.jpg)

## Tutorial 03 - Custom Toolbar

Continuing from Tut 02, add 'Alignment' and 'Image on the Right/Left' buttons in the toolbar.

![](https://raw.github.com/hrsetyono/cdn/master/blocks-tutorial/ch03-custom-toolbar.jpg)

## Tutorial 04 - Custom Sidebar (Inspector)

Continuing from Tut 02 (yes, ignore Tut 03), add these:

- A Color Palette to change Title color.
- A Text field to add label to the top-right of recipe.
- A toggle to enable/disable the Image.

![](https://raw.github.com/hrsetyono/cdn/master/blocks-tutorial/ch04-custom-sidebar.jpg)

## Tutorial 04b - More Inspector Controls

Learn about various type of built-in controls:

![](https://raw.github.com/hrsetyono/cdn/master/blocks-tutorial/ch04b-more-sidebar.jpg)

## Tutorial 04c - Custom Color Pickers

Learn how to make Color pickers that is not using the list from Palette.

![](https://raw.github.com/hrsetyono/cdn/master/blocks-tutorial/ch04c-custom-color-picker.jpg)

## Tutorial 05 - Nested Blocks

Create a block containing Heading, Paragraph, and Image blocks by default.

![](https://raw.github.com/hrsetyono/cdn/master/blocks-tutorial/ch05-nested-block.jpg)

## Tutorial 06 - Dynamic Block

Create a block to show latest X posts of selected category.

![](https://raw.github.com/hrsetyono/cdn/master/blocks-tutorial/ch06-dynamic-block.jpg)


## Tutorial 06b - Dynamic Block (Part 2)

Transform the Cooking Recipe from Tutorial 02 into dynamic block.

**NOTE**: This is a very important tutorial. Do not skip this!

If you changed the HTML markup of a block, it won't change the one already being used.

So, the solution is to render the HTML markup via PHP so the changes can be applied to all at once.

## Tutorial 07 - Using ESNext syntax

Coming Soon

-----

> If you spot a mistake or want to request a topic, let me know in [Issues](https://github.com/hrsetyono/wp-blocks-tutorial/issues)