// There are two paths absolute and relative 
// absolute path is full path and descriptive from root
// relative path is path relative to path from present directory
//  ../ mean to move one level up directory from present directory 
// . means pwd then go to classses then to Invoice.js
import {HasFormatter} from '../interface/HasFormatter'
export class Invoice implements HasFormatter{
    // we can also modifieres readonly, private , public 
    // readonly is used to read the data we cannot rewrite the data.
    // client:string;
    // details:string;
    // amount:number;                                    // also can be done like below
    // constructor(c:string,d:string,a:number){
    //     this.client=c;
    //     this.details=d;
    //     this.amount=a;
    // }

    // can be done like this if we use modifiers.
    constructor(
        readonly client:string,
        private details:string,
        public amount:number
        ){};
    format(){
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}