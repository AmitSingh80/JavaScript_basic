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
    console.log(" object is empty");
}