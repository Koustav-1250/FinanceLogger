"use strict";
var character = 'koustav';
console.log(character);
var inputs = document.querySelectorAll('input');
console.log(inputs);
var circle = function (diameter) {
    return diameter * Math.PI;
};
//explicit types
var char; // only take string in future.
// let age:number;
var isLoggedId;
// age=30; //correct
// arrays
var ninjas = []; // array only take string values and intialize with empty array. so that we can use push
//union types
var mixed = []; // array can contains string and number values
var uid;
uid = '123';
uid = 123; // varible with mixed types
var ninjaOne;
ninjaOne = { name: 'yosh', age: 30 };
ninjaOne = []; // we can do this because array is also an object
var ninjaTwo;
ninjaTwo = { name: 'koustav', age: 21, beltcolor: 'black' };
// dynamic types
var age = 25; // age can of any type and initialising it with value 25
age = true;
age = 'hello';
age = { name: 'kous' };
var union = []; // mixed arry of any type
var ninja;
// created a tsconfig.json file usign cmd -> tsc --init , In this i have changed to outdir to ./public and rootdir to ./src
// so whenever I compile typescript file I don't create a new js file in src folder , like it should be made inside 
// public folder for better workflow 
