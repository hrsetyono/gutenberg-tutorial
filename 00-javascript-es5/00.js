/*
  Tutorial 00 - JavaScript ES5 Syntax

  If you are not too familiar with the new JavaScript syntax, this one file will fill you in enough to follow our tutorials

  Topics covered:

  0. Self Invoking Function
  1. Let and Const
  2. Use Strict
  3. Arrow Function
  4. Destructuring Assigment
  5. Spread Operator
  6. Array Map
*/


/**
 * 0. SELF INVOKING FUNCTION
 * 
 * This is not ES5, but some people might wonder what these codes means.
 * It's basically a wrapper to scope current code. So any vars or functions declared here won't spill elsewhere.
 */

  (function() {
    // your code here
  } )();

// You can pass in variables and rename them

  (function( renamedVar1, renamedVar2, renamedVar3 ) {
    // ...
  } )( var1, var2, var3 );


/////


/**
 * 1. LET AND CONST
 * 
 * These are 2 new variable type to replace 'var'.
 * 
 * - 'const' means the value of the variable will NOT change.
 * - 'let' means the value of the variable will be changed.
 * 
 * This puts 'var' in a weird spot since it doesn't mean anything.
 * 
 * By using 'let' or 'const', it makes it easier to know whether you should or shouldn't change the value.
 */

  let myLet = 'this value will change';

  const MY_CONST = 'this value will not and cannot change'; // usually use all caps

  var myVar = 'who knows what will happen with this';


///////

/**
 * 2. USE STRICT
 * 
 * By adding this simple string, browser will treat your script differently.
 * There is no longer silent JS error, you will get proper error message shown in Developer Console.
 */

(function() { 'use strict';
  // ...
} )();


/////

/**
 * 3. ARROW FUNCTION
 * 
 * Simplify function syntax and prevent 'this' value to be overriden.
 */

// Old function:

  const sumNumber = function( num1, num2 ) {
    return num1 + num2;
  };

// New arrow function:

  sumNumber = ( num1, num2 ) => {
    return num1 + num2;
  };

// If your function only has 1 line which is 'return', you can remove the curly brace and return:

  sumNumber = ( num1, num2 ) => num1 + num2;

// If your function only has 1 parameter, no need for parentheses:

  const timesTwo = num => num * 2;

// But I prefer to always write it complete like this:

  timesTwo = ( num ) => { return num * 2; }


/////

/**
 * 4. Destructuring Assignment
 * 
 * This syntax is a shortcut to assign part of Object into variable
 */

// Let's say we have the object below:

  let myObject = {
    item1: 'value 1',
    item2: 'value 2',
    item3: 'value 3',
  };

// We want to assign 1st and 2nd item to their own variable. The old way is to do this:

  let item1 = myObject.item1;
  let item2 = myObject.item2;

// New way:

  let { item1, item2 } = myObject;

// This syntax forces you to have the same variable name as the key.


/////

/**
 * 5. Spread Operator
 * 
 * This syntax lets you combine an array into another array.
 */

// We have a 1st array that we insert to the middle of 2nd array:

  let array1 = [ 'text2', 'text3' ];

  let array2 = [ 'text1', ...array1, 'text4' ];

  console.log( array2 ) // [ 'text1', 'text2', 'text3 , 'text4' ]

// Before this syntax is available, we have to slice and merge it again.
// You might think this is useless, but we will see a real use case in latter tutorial.


/////

/**
 * 6. Array Map
 * 
 * Loops each item of an array and modify it. This is a shortcut from using For Loop.
 */

  let nums = [ 1, 2, 3, 4, 5 ];

  let numsSquared = nums.map( (n) => {
    return n * n;
  } );

  console.log( numsSquared ); // [ 1, 4, 9, 16, 25 ]

// Since it returns an array, you can combine it with spread operator:

  let nums2 = [
    0,
    ...nums.map( (n) => {
      return n * n;
    } ),
    36,
    49,
    64,
  ];

  console.log( nums2 ); // [ 0, 1, 4, 9, 16, 25, 36, 49, 64 ];


/*
  That's all folks!
  
  If you spot a mistake or want to request a topic, let me know in https://github.com/hrsetyono/wp-blocks-tutorial/issues
*/