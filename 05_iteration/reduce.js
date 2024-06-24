// reduce()

const myNum =[1,2,3]


// const Total= myNum.reduce(function(acc,currentval){
//     console.log(`acc:${acc} and currval: ${currentval}`);
//     return acc+currentval
// },0)
// console.log(`total: ${Total}`);


//Arrow function 

// const total = myNum.reduce((acc,currval)=>(acc+currval),1)
// console.log(total);


const total = myNum.reduce((acc,currval)=>{return acc+currval},1)
// console.log(total);


const shoppingItem =[
    {
         itenName :" js course",
         Price: 2000
    },
    {
        itenName :"mobile  course",
        Price: 4999
   },
   {
    itenName :"mern course",
    Price: 2999
    },
]

const TotalPay=shoppingItem.reduce((acc,item)=>(acc+item.Price),0)
console.log(`Your total bill is : ${TotalPay}`);