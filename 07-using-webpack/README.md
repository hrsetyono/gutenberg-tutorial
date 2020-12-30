# Tutorial 07 - Using ESNext Syntax

**OBJECTIVE:**

- Learn how to use the new syntax of JavaScript

- Learn how to compile them into old JavaScript that's supported by browser.
 
**TASK:**

Transform the Cooking Recipe from Tutorial 02 to JSX Syntax 

**REFERENCE:**

- https://github.com/WordPress/gutenberg-examples

## What is JSX?

ESNext (or also known as JSX) is a new JavaScript syntax that makes creating element with React easier.

Most notably it allows HTML tag inside a JavaScript like this:

```js
edit: function( props ) {
  return (
    <div className={ props.className }>
      Hello World! I'm JSX Syntax
    </div>
  );
}
```

And if you want to loop something, you can use inline-loop with `map()`:

```js
edit: function( props ) {
  let items = [
    'Item 1 ',
    'Item 2',
    'Item 3'
  ];

  return (
    <ul className={ props.className }>
      { items.map( item =>
        <li>{ item }</li>
      ) }
    </ul>
  );
}
```

But that syntax can't be executed by browser yet. It needs to be compiled into old syntax.

## Compiling JSX

**STEP 1: Installation**

1. Install [Node JS](https://nodejs.org/en/download/)
1. Create `package.json` file in your working directory. You can copy the one in this folder.
1. Run `npm install` in your directory.
1. If you use git, make sure to ignore the newly created `/node_modules` directory.

**STEP 2: Compile**

1. Open `package.json` and update the directory in `watch` and `build` to match your JS name.  

    You can specify multiple JS if you need to:

    `wp-scripts start esnext/my-script.js esnext/your-script.js --output-path=.`

1. Run `npm run watch` to automatically compile when the source JS changed.

1. Run `npm run build` before you push the code to live server to minify the JS.