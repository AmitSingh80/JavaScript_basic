function sayMyName(){
console.log('a');
console.log('i');
console.log('m');
console.log('t');
}
// sayMyName()

// function addTwoNumbers(number1, number2){    // define parameters
//     console.log(number1+ number2);
// }
//  addTwoNumbers(4,5)   // value pass argument



function addTwoNumbers(number1, number2){    // define parameters
    let result= number1+ number2
    // console.log("amit");
    return result
    //below this not execute
    // console.log("amit");
}
  const result=  addTwoNumbers(4,5)   // value pass argument
//    console.log("result: " ,result);

// another way to return the value
   function sumTWoNumber (num1,num2){
     return num1+num2
   }
   const Sum=sumTWoNumber(3,4)
//    console.log("result: ",Sum);



function loginUser(userName){
    // if(userName===undefined) 
        if(!userName)              //better syntax or another way
        {
      
          console.log("please enter username");
     return;
    }
    return `${userName} just loggedIn`
}
//  console.log(loginUser("amit"));
console.log(loginUser());  //undefined print