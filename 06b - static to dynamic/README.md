# Tutorial 06b - Converting Static to Dynamic Block

## Why?

Eventhough a block only has static content, there are some **benefits** of making it rendered via PHP:

1. Easier to update. You can change the HTML markup anytime and it will be applied to all instances.

1. Easier to develop. Especially if you're not used to React.

The downside is obviously heavier performance, but it's not a problem with a good cache.

## When?

Most of the time. Unless you are 100% sure that there won't be any changes in the future.

## About this Tutorial
  
- Learn how to transform a static block into dynamic block.

- Learn how to save RichText content as attribute.
  
**TASK:**

Transform the Cooking Recipe from Tutorial 02 into dynamic block.
    
- The first step is to make `save()` returns null.

- Then re-create the `save()` markup in PHP as render callback.


**COMPILING ESNEXT**

Read the README in this repo's root folder.

**REFERENCE:**

- https://developer.wordpress.org/block-editor/tutorials/block-tutorial/creating-dynamic-blocks/

