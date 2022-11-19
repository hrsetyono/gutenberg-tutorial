# Tutorial 7 - Link Popup

![](https://raw.github.com/hrsetyono/cdn/master/blocks-tutorial/ch07-link-popup.jpg)

> **Important**: As this tutorial is quite complex, we are not providing the ES5 version.

Advanced things in Gutenberg are hard to find online. It's mostly because the terminology isn't well known and not many blogs are covering it.

For example how do you make a **Link Popup**? At the time of writing, Google doesn't help.

So I downloaded [Gutenberg repo](https://github.com/WordPress/gutenberg) and checked the [Core Button block](https://github.com/WordPress/gutenberg/tree/master/packages/block-library/src/button)

You will see how they implement the Link Popup.

## About this Tutorial

- Learn how to create JS Module.

- Learn how to make a Link Popup as used in Button using `<Popover>` and `<LinkControl>`.

- Learn how to disable the inline Link in RichText.

**TASK**

Create a simple card block with Title, Description, and Link Popover to insert link.

If link exists, the wrapper should be `<a>`, otherwise it uses `<div>`.

**REFERENCES**

- [Button block in Gutenberg](https://github.com/WordPress/gutenberg/tree/master/packages/block-library/src/button)