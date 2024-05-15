const tinderUser= new Object()  //empty object //singleton object
const tinderUser2 = {}          // empty non singleton object 

tinderUser.id = "123abc"
tinderUser.name = "Amit"
tinderUser.isLoggedIn = true

// console.log(tinderUser);

const regularUser={
    email:"amit@gmail.com",
    fullname:{
        username:{
              FirtName:"Amit",
              Lastname:" Singh"
        }
    }
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.username.FirtName);


const obj1 =  {1:"a", 2:"b"}
const obj2 ={ 3:"c", 4:"d"}

// const obj3 ={obj1,obj2}

// const obj3= Object.assign({}, obj1,obj2)


const obj3={...obj1,...obj2} //spread operator
// console.log(obj3);

const user=[
    {
    id:"123",
    email: " amit@gmail.com"
    },
    {
        id:"133",
        email: " marcel@gmail.com"
     },

]

// console.log(user[1].email); //multiple object access

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// ========================================================////'


//de structure

const course={
    courseID:"1",
    courseName: "javascript",
    price:" Rs-13000",
    courseInstructor: "Amit"
}
const {courseInstructor,courseName}= course  //ek baar me print krna 
// console.log(courseInstructor,courseName); 

// de stucture syntax object
const {courseInstructor:instuctor}= course   // syntax 
console.log(instuctor);


//API

// JSON FORMAT

// "{
//     "NAME": " AMIT",
//     "courseNAME" :" JAVASCRIPT"
// }

