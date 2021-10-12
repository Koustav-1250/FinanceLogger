// "use strict";
// var character = 'koustav';
// console.log(character);
// var inputs = document.querySelectorAll('input');
// console.log(inputs);
// var circle = function (diameter) {
//     return diameter * Math.PI;
// };
// //explicit types
// var char; // only take string in future.
// // let age:number;
// var isLoggedId;
// // age=30; //correct
// // arrays
// var ninjas = []; // array only take string values and intialize with empty array. so that we can use push
// //union types
// var mixed = []; // array can contains string and number values
// var uid;
// uid = '123';
// uid = 123; // varible with mixed types
// var ninjaOne;
// ninjaOne = { name: 'yosh', age: 30 };
// ninjaOne = []; // we can do this because array is also an object
// var ninjaTwo;
// ninjaTwo = { name: 'koustav', age: 21, beltcolor: 'black' };
// // dynamic types
// var age = 25; // age can of any type and initialising it with value 25
// age = true;
// age = 'hello';
// age = { name: 'kous' };
// var union = []; // mixed arry of any type
// var ninja;
// created a tsconfig.json file usign cmd -> tsc --init , In this i have changed to outdir to ./public and rootdir to ./src
// so whenever I compile typescript file I don't create a new js file in src folder , like it should be made inside 
// public folder for better workflow 








// const invone=new Invoice('mario','website work',200);
// const invtwo=new Invoice('yoshi','for construction',400);
// let invoices:Invoice[]=[];
// invoices.push(invone);
// invoices.push(invtwo);
// console.log(invoices)

// let docOne:HasFormatter,docTwo:HasFormatter;
// docOne=new Invoice("yoshi",'backend work',2000);
// docTwo=new Payment("Lucky", 'Manager work',1000);

// let docs:HasFormatter[]=[];
// docs.push(docOne);
// docs.push(docTwo);


// const anchor=document.querySelector('a');
// typescript has no connection with index.html file so 
// console.log(anchor.href) will give error. To prevent this we can do runtime check 
// by if condition checking anchor is not null or 
// by being sure that anchor tag in present in index.html we can use !

// const anchor=document.querySelector('a')!

// Type Casting
// const form=document.querySelector('.new-item-form') as HTMLFormElement;
// so in above line what we have done particularly tell that class we are selecting is of 
// type HTMLFromElelement otherwise typescript will not be able to know that.


// Generics 
// let fun=<T extends object>(obj:object)=>{
//     const uid=Math.random()*100;
//     return {...obj,uid}; // return all properties of  obj and add uid
// }