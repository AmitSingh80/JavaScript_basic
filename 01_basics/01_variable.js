const accountid=123
let email="heyamit5@gmail.com"
var accountPassword="1234"
accountCity="delhi"
let accountState;

// accountid=2     // not allow

email="amit5@gmail.com"
accountPassword="4567"
accountCity="delhi"


console.log(email);

/* 
prefer not to used var
because of issue in block scope and functional scope

*/

console.table([email,accountPassword,accountCity,accountState]);
