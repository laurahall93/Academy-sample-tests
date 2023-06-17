//Pseudo code functioning 
// program : miminizeWebAresses
// input : emptu array
// output array

// actual pseudo code
// define an webAdresses array to emty
// define new array lowerCaseWebAdresses = 0
// for EACh Web in webAdressws
// lowerCaseWebAdresses = web.toLowCasepush();
// return lowerCaseWebAdresses


function tranformWebAdress(webAdresses){
    let lowerCaseWebAdresses = [];
for( let web of webAdresses){
    lowerCaseWebAdresses.push(web.toLowerCase());
}
return lowerCaseWebAdresses;
}

//test case 
console.log(tranformWebAdress(["academy.tech", "GITHUB.COM", "StackOverflow.com", "mOzIlLa.OrG"]));
console.log(tranformWebAdress(["aCadeMy2.TECH", "GIThub2.COM", "StACkOverflow2.com", "MOzIlLa2.OrG"]));