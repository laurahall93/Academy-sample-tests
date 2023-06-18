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
function individualGreetings2(names) {
let greeting2 = names.map(name => `Hello, ${name}!`);
return greeting2;
}


console.log(individualGreetings(["Ash", "Beth", "Ciara"]));
console.log(individualGreetings2(["Miko", "Laura", "Sara"]));