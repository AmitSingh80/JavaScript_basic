//date

let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);
// console.log(myDate.getHours());

// let myAnotherDate=new Date(2024,0,23)
let myAnotherDate=new Date("1-14-2024")

// console.log(myAnotherDate.toDateString());
// console.log(myAnotherDate.toLocaleString());


let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(Date.now());

//second convert
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));


let newDate=new Date()
// console.log(new Date());
// console.log(newDate.getMonth());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());

// console.log(`${newDate.getDay()} and the month is ${newDate.getMonth()}`);

// newDate.toLocaleString('default',{
//     weekday:"long"
// })
console.log(newDate.toLocaleString('default',{
    weekday:"long"
}));


