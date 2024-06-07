// var a =2;
// let b= 30;
// const c=50;

// console.log(a);
// console.log(b);
// console.log(c);
// =====================================

// var a=300;
let b=30;

if(true){
    var a =2;
    let b= 30;
    const c=50;
    // console.log("inner:",b)
}
// console.log(a);   //run
// console.log(b);  
// console.log(c); 

// ============================================

function one(){
    const userName=" amit"
    function two(){
        const website ="youtube"
        // console.log(userName);
        // console.log(website);
    }
    // console.log(website);
    two()
}
one()
// ======================================

if(true){
    const userName=" thor"
    if(userName==" thor"){
        const website=" crome"
        // console.log(userName + website);
        // console.log(userName.concat(" Amit"));
    }
    // console.log(website); // error
}
// console.log(userName); //error


/////////////////////////////////////////
// interesting example

function addOne (num){
    return num +1
    // console.log(num);
}
console.log(addOne(5));

// ========================================
// hosting v bolte hai

// addtwo(6)             // cannot access addtwo before initialization 
const addtwo = function (num){
    return num +2
}

console.log(addtwo(6))