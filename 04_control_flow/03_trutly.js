const userEmail=" amit@gmail.com"
// const userEmail=" "
// const userEmail= [ ] 

if(userEmail){
    console.log("  Got user Email");
}else{
    console.log(" don't user email");
}


//  falsy values
// false , 0 , -0 , BigInt 0n , " " ,null , NaN , undefined

// trutly values
// true , 1, [ ], " 0" ,' false' ," " ,{ }, function(){}


// if(userEmail.length==0 ){
//     console.log("Array case is empty");
// }

const emptyObject ={}
if(Object.keys(emptyObject).lenght==0){
    // console.log(" object is empty");
}

// nullish coaliescing Opertor (??): null undefine

let val1;
// val1 =5??10
// val1 = null ?? 10
// val1 = undefined ?? 6
val1 =null ?? 10 ?? 15

console.log(val1);


//terniary opertor

// condition ? true: false

const price =100
price >=90? console.log(" price is 80"): console.log(" more than 80");