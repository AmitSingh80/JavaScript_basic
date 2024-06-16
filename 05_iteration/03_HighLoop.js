// for of
// [{},{},{}]    object



const arr =[1,2,3,4,5,6]

for (const num of arr) 
    {
    // console.log(num);
}
// =====================================================

const String =["thor", " batman"]

for (const value of String) {
    // console.log(value);
}

// const Obj1 =[{hey},{Amit}]

// for (const val of Obj1) {
//     // console.log(val);
// }


//map        //uniue value 

const map =new Map()

map.set ('IN', 'India')
map.set ('fr', 'France')

// console.log(map);

for (const key of map) {
    // console.log(key);
}
for (const [key,value] of map) {
    // console.log(key ,':=', value);
}


// ====================================================
//object is not Iterable in For of loop

const myObj ={
    "game1": "SpiderMan",
    "game2": "btman"
}
for (const [key ,value] of myObj) {
    console.log(key, ':-' ,value);
}