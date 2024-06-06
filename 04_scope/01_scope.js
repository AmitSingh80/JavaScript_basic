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
        console.log(userName);
        console.log(website);
    }
    // console.log(website);
    two()
}
one()

