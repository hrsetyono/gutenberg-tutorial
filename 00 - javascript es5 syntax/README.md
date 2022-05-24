# Common JavaScript Syntaxes Used in Gutenberg Development

## 1. Let and Const

These two replace `var`. The differences are:

- `let` is a variable that can change.
- `const` is a variable that can't change.

By using them, we mark whether a variable is allowed to be changed or not.

```js
let num = 10;
const index = 1;

num += 5; // works
index += 1; // error!
```

## 2. Arrow Function

It's a cleaner syntax of writing function:

```js
const normalFunc = function(num) {
  // do something
}

const arrowFunc = (num) => {
  // do something
}
```

The main difference is that Arrow Function won't change the value of `this`. Normal Function will override `this`.

For example, we have this jQuery listener:

```js
// Works!
$('.button').on('click', function(e) {
  $(this).addClass('button-active');
});
```

The value of `this` refers to the callback function. jQuery did magic to make it refer to the target element.

But the example above won't work if we use the Arrow function:

```js
// Error!
$('.button').on('click', (e) => {
  $(this).addClass('button-active');
});
```

The value of `this` still refers to the parent scope. So we need to find another way. Luckily, target element can be accessed with `e.currentTarget` as shown below:

```js
$('.button').on('click', (e) => {
  $(e.currentTarget).addClass('button-active');
});
```

## 3. Arrow Function Shorthand

If the function body is a return and only 1 liner, you can remove the curly braces and inline it like this:


```js
// from this:
let onlyOneLine = (num) => {
  return num * 2;
}

// become this:
let onlyOneLine = (num) => num * 2;
```

## 4. Destructuring Assignment

Destructuring Assignment is a shortcut to assign part of an Object into variables.

This is very useful when using modules such as Gutenberg.

Gutenberg provides reusable elements under the `wp` global variable. For example if you need a button, you write this:

```js
wp.element.createElement(wp.components.Button, {});

wp.element.createElement(wp.components.TextControl, {});
```

That's quite wordy right? You might re-assign them like this:

```js
const createElement = wp.element.createElement;
const Button = wp.components.Button;
const TextControl = wp.components.TextControl;

createElement(Button, {});
createElement(TextControl, {});
```

That is the right step and destructuring is a shorthand for that which looks like this:

```js
const { createElement } = wp.element;
const { Button, TextControl } = wp.components;

createElement(Button, {});
createElement(TextControl, {});
```

Destructuring forces you to use the same name as the Object's property. So if you need different name, use the old method:

```js
const el = wp.element.createElement;
const { Button, TextControl } = wp.components;

el(Button, {});
el(TextControl, {});
```

## 5. Spread Operator

Spread Operator is a shortcut to merge arrays or objects:

```js
const array1 = [ 'item1', 'item2' ];
const array2 = [ 'item3', 'item4' ];

console.log([ ...array1, ...array2 ]);
// [ 'item1', 'item2', 'item3', 'item4' ];

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

console.log({ ...obj1, ...obj2 });
// { a: 1, b: 3, c: 4 }
```

This is a modern way to merge object, previously we used `Object.assign`:

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

console.log(Object.assign({}, obj1, obj2));
// { a: 1, b: 3, c: 4 }
```

## 6. Functional Loop

This is a relatively new addition to JavaScript. Instead of using `for` loop, you have these built-in functions:

- map
- filter
- reduce
- find
- findIndex
- forEach

### map()

Iterate over the array and apply the modifier:

```js
const nums = [ 1, 2, 3, 4 ];
const numsSquared = nums.map((n) => {
  return n * n;
});

console.log(numsSquared);
// [ 1, 4, 9, 16 ]
```

### reduce()

Iterate over the array to get a single result:

```js
const nums = [ 1, 2, 3, 4 ];
const numsSummed = nums.reduce((result, n) => {
  result += n;
  return result;
}, 0);

console.log(numsSummed);
// 10
```

You can read the rest at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

## 7. Template Strings

Old way of combining strings:

```js
var name = 'John';
var job = 'Web Developer';

console.log('Hello, my name is ' + name + ' and my job is ' + job);
```

New way using template strings (use the backtick on the left of [1] key):

```js
const name = 'John';
const job = 'Web Developer';

console.log(`Hello, my name is ${name} and my job is ${job}`);
```

It supports multiline too!

## 8. Short Intro to React Elements

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
return el('div', { className: 'card' },
  el('h2', {}, title),
  el('p', {}, description),
);
```

-----

That's all you need to know to be able to follow this tutorial.

> If you have any question, let me know in [Issues tab](https://github.com/hrsetyono/gutenberg-tutorial/issues)