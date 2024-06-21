const coding =["js", "ruby","cpp"]

// coding.forEach(  function(item) {
//     console.log(item);
// } ) 



// arrow function    () => {}

// coding.forEach( (val)=> {
//     // console.log(val);
// })


// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)


// coding.forEach ( (item,index,arr)=>{
//     console.log(item,index,arr);
// })


const myCoding =[
    {
        languageName: "javascript",
        langaugeFile: " js"
    }
    ,
    {
        languageName: "java",
        langaugeFile: " java"

    },
    {
        languageName: "Node",
        langaugeFile: " Node"

    }
]

myCoding.forEach( (item,index)=>{

    console.log(item.langaugeFile,index);
})