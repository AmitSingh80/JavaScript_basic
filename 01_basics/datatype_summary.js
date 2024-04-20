// primitive 

// 7 types: String,Number, Boolean,null undefined,Symbol,Bigint

const score= 10
const scoree=100.0
const name="amit"
const  Number=3
const  boolean=true
const isLoggedIn=null
let  useremail;

const id=Symbol('123')
const anotherId=Symbol('123')

// console.log(id==anotherId);

// const Bigint=1111234567n

// javascript is a Dynamically type language.



// refrencer ( non primitive)

// array,Object, function

const heros=["shaktima"," ironman","batman"]  //array

//object
 let myObj={
    name:"amit",
    age:22,
}

// function
const myFunction=function(){
     console.log("helllo amit");
}


// to find datatype easy way
console.log(typeof scoree);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof id);


///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive)  it create a copy ,  Heap ( Non primitive) it give refence value

let myName=" amithey.com"