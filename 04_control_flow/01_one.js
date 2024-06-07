//if statement


// if(true){

// }

const logggedIn= true;
if(logggedIn){
    // console.log(" loogin success");
}

// const temp = 40;
// if(temp===40){
//     console.log(" temp is less than 50");
// }
// else{
//     console.log("temp is greater than 50");
// }
// console.log(" alway execute becoz it outside the function ");


// < , > , <=, >= , ==, !=,  ===

const score =200

// if(score>100){
//     // const power ="fly"
//     // var power =" sky"
//     let power ="flySky"
//     console.log(`user power ${power}`);
// }
// console.log(`user power ${power}`);


const balance =1000;
// if(balance>500) console.log("test"),console.log("test2"); // not a good to write in single line but it run your code

// ==================================================================

// if(balance< 500){
//            console.log("less than");

// }else if(balance<750){
//     console.log("less than 750");
// }else if(balance>600){
//       console.log(" greater than 600");
// }else{
//     console.log("less than 1200");
// }

const userLoggedIn =true
const debitCard= true

const userLoggedGoogle =false
const userLoggedEmail =true

if(userLoggedIn && debitCard){
    console.log(" allow to buy");
}

if(userLoggedGoogle || userLoggedEmail){
    console.log(" user logged in");
}