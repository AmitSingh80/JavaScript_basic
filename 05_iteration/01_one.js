// for loop

for (let i= 0; i <= 11; i++){
    const element = i;
    if(element==4){
        // console.log(" 4 is best number");
    }
    // console.log(element);

}


for (let i = 0; i <=10; i++) {
        // console.log(`Outer loop values ${i}`);

       for (let j = 0; j <=10 ;j++) {
        //  console.log(`inner loop vaule ${j} and inner loop ${i}`);
        
       }
    
}

let myArray =["flash","batman" ,"thor"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

//break  and continue

for (let index = 0; index <=10 ;index++) {
    if (index==5) {
        console.log(`detected ${index}`);
        // break;
        continue;
    }
    console.log(`value of index is ${index}`);
}