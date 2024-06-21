const coding =["js","ruby","java","python","cpp"]

const values=coding.forEach( (item)=>{
    //  console.log(item);
     return item
})
// console.log(values);  // forEach method don't  return anything  //undefine

// ===================================================
//filter

const myNum= [1,2,3,4,5,6,7,8,9,10]

let newNum=myNum.filter( (value)=>value>5  )
    // console.log(newNum);

    const newNumm =myNum.filter((num)=> {
        return num>4
            
    })
    console.log(newNumm);