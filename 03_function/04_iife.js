// Immediately Invoked Function Expressions (IIFE)

// why we use 
// ANS= WE have a problem with global scope so we used IIFE to remove global scope problem 


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


// ========================
( ()=> {
  console.log(` hello IFFE`);
}) (); // end with ; semicolon to run two or more IIFE function imp**
// =================================

//unName IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`); //it accept variable also 
} )('amit')  //pass the variable here