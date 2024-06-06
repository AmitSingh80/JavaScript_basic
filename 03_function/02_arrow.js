const userName={
 useraname:" amit",
 price:90,

  welocomeMessage: function(){
     //   console.log(`${this.useraname}, welcome to website`);
     //   console.log(this);
  }
}
// userName.welocomeMessage()
// userName.useraname="Amit singh"
// userName.welocomeMessage()

// console.log(this);

// ============================================


// function chai(){
//      let userName="hey";
//      console.log(this);
// }
// chai()

// ==================================  we can use this in both arrow function and function 
// const chai = ()=>{
//    let useraname = 'amit'
//    console.log(this);
// }

// chai()                 


 
// const addTwo=(num1,num2) => {
//        return num1+num2
// }
// explicitly return if we write { } then we use return keyword



//implicit return  we not write { }
// const addTwo=(num1,num2) => num1+num2
// const addTwo=(num1,num2) => ( num1+num2)   //code will be single line 


// object call
const addTwo=(num1,num2) => ({username:'amit'})   //code will be single line 


console.log(addTwo(3,5));
