const myNum=[1,2,3,4,5,6,7,8]

const NewNum=myNum.map( (Num)=> Num+10);
// console.log(NewNum);

const new1= myNum
          .map((num)=> num *10)  
          .map((num1)=> num1 +1) // it take num values then add  means modify 
          .filter( (num2)=> num2 >=40)
          console.log(new1);