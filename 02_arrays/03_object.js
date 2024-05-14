// singleton
// Object.create   //contructor

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Amit",
    "full name": "Amit singh",
    [mySym]: "mykey1",     // syntax of accesss symbol
    age: 18,
    location: "Delhi",
    email: "Amit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "Amit@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Amit@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());