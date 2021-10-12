export class Invoice {
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
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    ;
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
