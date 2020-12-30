# Common JavaScript Syntaxes Used in Gutenberg Development

## 1. Let and Const

These two replaces `var`. The differences are:

- `let` is variable that will change.
- `const` is variable that won't change.

By using them, we clearly mark whether a variable is allowed to be changed or not.

```js
let num = 10;
const INDEX = 1;

num += 5; // works
INDEX += 1; // error!
```

## 2. Arrow Function

```js
let normalFunc = function( num ) {
  // do something
}

let arrowFunc = ( num ) => {
  // do something
}
```

Arrow function is an alternative to the normal function.

Aside from the syntax, the main differences is that Arrow Function won't change the value of `this`. Normal Function will override `this`.

For example, we have this jQuery listener:

```js
// Works!
$( '.button' ).on( 'click', function( e ) {
  $(this).addClass( 'button-active' );
} );
```

The value of `this` refers to the callback function. jQuery did a magic to make it refer to the target element.

But the example above won't work if we use Arrow function:

```js
// Error!
$( '.button' ).on( 'click', ( e ) => {
  $(this).addClass( 'button-active' );
} );

// Works!
$( '.button' ).on( 'click', ( e ) => {
  $(e.currentTarget).addClass( 'button-active' );
} );
```

The value of `this` still refers to whatever the outside scope is. So we need to find another way. Luckily, target element can be accessed with `e.currentTarget` as shown in the 2nd snippet.


## 3. Arrow Function Shorthand

Across this tutorial, you will see many shortened Arrow functions.

If it only has 1 parameter, you can remove the parentheses:

```js
let onlyOneParam = ( num ) => {
}

// become

let onlyOneParam = num => {
}
```

If the function body is only a 1 liner, you can remove the curly braces and inline it. You can also omit the `return`:

```js
let onlyOneLine = num => {
  return num * 2;
}

// become

let onlyOneLine = num => num *2;
```


## 4. Destructuring Assigment

Destructuring Assignment is a shortcut to assign part of an Object as variables.

As an example, we will take a look at the Gutenberg's component object. Gutenberg provides many reusable elements such as Button and TextControl (for text input). To use them, we can write it like this:

```js
wp.components.Button
```

That's quite wordy right? Some of you might think to assign it into variable like this:

```
const Button = wp.components.Button;
const TextControl = wp.components.TextControl;
const SelectControl = wp.components.SelectControl;
```

That's too much repetition! But ES5 syntax added a way to solve that:

```js
const { Button, TextControl, SelectControl } = wp.components;
```

This limits you to use the same variable name as the object's properties. But that's fine.


## 5. Spread Operator

Spread Operator is a shortcut to merge array with another array.

```js
let array1 = [ 'item1', 'item2' ];
let array2 = [ 'item3', ...array1, 'item4' ];


console.log( array2 );
// [ 'item3', 'item1', 'item2', 'item4' ];
```

This is rarely used, but just letting you know in case you see someone's code that has it.

## 6. Array Map

Array Map is basically an inline loop. It is shorter and tidier.

As an example, we have an array of numbers that need to be squared. With `for` loop, we do it like this:

```js
let nums = [ 1, 2, 3, 4 ];
let numsSquared = [];

for( let n of nums ) {
  numSquared.push( n * n );
}
```

Array Map can achieve the same thing like this:

```js
let nums = [ 1, 2, 3, 4 ];
let numsSquared = nums.map( ( n ) => {
  return n * n;
} );

// or if using shortened arrow function:

let numsSquared = nums.map( n => n * n );
```


## 7. Short Intro to React Elements

React is meant to be used with a compiler because it uses ESNext syntax which combined HTML and JS like this:

```js
let title = 'Hello World';
let description = 'Lorem ipsum dolor sit amet';

// ESNext syntax
return <div className="card">
  <h2> { title } </h2>
  <p> { description } </p>
</div>;
```

If you don't like using compiler, we can write it in native JavaScript. But it's a lot dirtier like this:

```js
const el = React.createElement();
let title = 'Hello World';
let description = 'Lorem ipsum dolor sit amet';

// Native JS syntax
return el( 'div', { className: 'card' },
  el( 'h2', {}, title ),
  el( 'p', {}, description )
);
```

The first parameter of `React.createElement()` is the tag name. Second is attribute, while third and beyond are its children.

-----

That's all you need to know to be able to follow this tutorial.

> If you have any question, let me know in [Issues tab](https://github.com/hrsetyono/gutenberg-tutorial/issues)