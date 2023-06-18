//psoudo code
/*Program : individualGreeting
input : array of strings
output : array of strings

function individualGreetings(names)
set greeting = [];
for each names in names 
greeting.push(`"Hello ${name}!"`);

return greeting
*/


function individualGreetings(names) {
    let greeting = [];
    for(let name of names){
        greeting.push(`Hello,  ${name}!`);
    }
    return greeting;
}

console.log(individualGreetings(["Ash", "Beth", "Ciara"]));