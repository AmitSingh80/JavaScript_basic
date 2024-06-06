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


// ================================================================================
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


// ==============================================
function loginUser(userName){
    // if(userName===undefined) 
        if(!userName)              //better syntax or another way
        {
      
          console.log("please enter username");
     return;
    }
    return `${userName} just loggedIn`
}
// //  console.log(loginUser("amit"));
// console.log(loginUser());  //undefined print

// ====================================================================
 function calculateCartPrice(num1){
  // return console.log(num1);         //print krene ka another method
  return num1

 }
//  calculateCartPrice(3);
//  console.log(calculateCartPrice(2));


 function addPrice (...num2){   //spread or rest operator it convert into single arrays
  return num2
 }

//  console.log(addPrice(2,300,45));


 function addPrices (val1,val2,...num2){   
  return num2
 }

//  console.log(addPrices(2,300,45)); // val1=2, val2=300 , and num2= 45 so ans is 45


// ========================================================
 const user ={
   username:" amit",
   location: " delhi"
 }

  function handleObject (anyobject){
      console.log(`username is ${anyobject.username} and location is ${anyobject.location}`);
  }
  //  handleObject(user);

// ================================ aise v object pass kr sakte hai
  handleObject ({
    username:" john",
    location:"gurgao"
  })
// =======================================
  const myNewArray =[200,5,6]
  function secoundArray(newArray){
    return newArray[2]

  }
  // console.log(secoundArray(myNewArray));
  console.log(secoundArray([200,4,5,6]));


  