let greet: Function;
// greet='hello'// wrong
greet = () => {
  console.log("hello,again");
};

// if we give default parameter values then we don't need (c?:)-> this syntax
// if we want to give some default parameter without values we can use this syntax-> c?: string|number
let add0=(a:number , b:number , c?: string|number)=>{
  console.log(c) // o/p: undefined
}
let add = (a: number, b: number, c: string | number = 10) => {
  // optional or default parameter should be at last.
  console.log(a * b);
  console.log(c); // o/p: 10
};
add(5, 10, "20"); // correct

const minus =(a:number , b:number) : number=>{   // return number so ():number
  return a-b;
}
// if you hover over minus then you will find minus is also of 
// type number. 

//🎈 aliases
type stringOrnum=string|number // aliases defining type
const logDetalis=(uid:stringOrnum , item:string)=>{
  console.log(`${uid} ${item}`);
}

type obj={uid:stringOrnum,id:number};
const fun=(user:obj)=>{
console.log(`${user.uid} ${user.id}`);  // see how we are using aliases
}

//🎈 Function Signature
let funsign:(a:string, b:string)=> void ; // return void

// 🎈 Interfaces
interface Isperson{
  name:string;
  age:number;
  speak(a:string):void;
}
const me:Isperson={
  name:"Koustav",
  age:21,
  speak(text:string){
    console.log(`speak ${text}`);
  }
}
