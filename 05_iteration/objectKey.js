const myObjct={
    js: "javascript",
    cpp: " c++",
    rb: "ruby",
    kt:"kotlin"
}

for (const key in myObjct) {
//    console.log(key);  
}


for (const key in myObjct) {
    // console.log(`${key} shortcut is for ${myObjct[key]}`);  
 }


 const map =new Map()

map.set ('IN', 'India')
map.set ('fr', 'France')

for (const key in map) {
     
//    console.log(key);   note // map pe iteration nhi ho sakta
}