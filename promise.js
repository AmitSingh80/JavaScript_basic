const promiseOne= new Promise(function(resolve,reject){
    //do an async task
    //DBcalls, network
    setTimeout(function(){
        console.log('async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
    
});

new Promise(function(resolve,reject){
    setTimeout(function(){
     console.log("async task 2");
     resolve()
    },1000)
}).then(function(){
    console.log("async task reslove 2");
    
})

const PromiseThree= new Promise(function(resolve ,reject){
    setTimeout(function(){
        console.log("Async task 3");
        resolve({username:"amithey",
            email:"heyamit4@exp.com"
        })
        
    },1000)
}).then(function(user){
    console.log(user,"task 3 resolve");
    
})

PromiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
        resolve({username:"hey",email:"hey@gmail.com"})   
        }else{
            reject('ERROR:something wrong')
        }
    },100)
}).then((user)=>{
    console.log(user);
    return(user.username)
    
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(function(){
    console.log("finally is Promise is eithr resolve and reject");
    
})



promiseFive =new Promise (function(reslove,reject){
  setTimeout(function(){
    let error=true
    if(!error){
        reslove({username:"hey1",passwoard:"123"})
    } else{
        reject('something JS: error')
    }
  },1000)
})

async function consumePromiseFive(params) {
    try {
        const response=await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://fakestoreapi.com/products/1')
//     //  console.log(response);
     
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("e:",error);   
//     } 
// }
// getAllUsers()



fetch("https://fakestoreapi.com/products/1")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=> console.log(error));



