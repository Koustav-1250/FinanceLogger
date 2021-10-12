
import {Invoice} from './classes/Invoice.js' 
import { HasFormatter } from './interface/HasFormatter.js';
import { Payment } from './classes/Payment.js'
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
const form=document.querySelector('.new-item-form') as HTMLFormElement;
// so in above line what we have done particularly tell that class we are selecting is of 
// type HTMLFromElelement otherwise typescript will not be able to know that.

// inputs
const type=document.querySelector('#type') as HTMLSelectElement;
const tofrom=document.querySelector('#tofrom') as HTMLInputElement;
const details=document.querySelector('#details') as HTMLInputElement;
const amount=document.querySelector('#amount') as HTMLInputElement;

const ul=document.querySelector('ul')!;
const ltemplate=new ListTemplate(ul);

form.addEventListener('submit',function(e:Event){
    e.preventDefault();
    let values: [string,string,number] // tuple 
    values=[tofrom.value,details.value,amount.valueAsNumber];
    let doc:HasFormatter;
    if(type.value === 'invoice'){
        doc=new Invoice(...values);
    }else{
        doc=new Payment(...values);
    }
    ltemplate.render(doc,type.value,'end');
});



