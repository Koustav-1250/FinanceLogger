import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
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
const form = document.querySelector('.new-item-form');
// so in above line what we have done particularly tell that class we are selecting is of 
// type HTMLFromElelement otherwise typescript will not be able to know that.
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const ltemplate = new ListTemplate(ul);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    ltemplate.render(doc, type.value, 'end');
});
