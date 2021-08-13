const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(`Welcome to the user password validator tool`);

reader.question(`Please enter your password`, (answer) => {
    if(answer.length >= 10) {
        console.log(`Success, you are logged in`);
    } else {
        console.log(`Password is not long enough`);
    }
    reader.close();
});  


// welcome the user in a console.log so, its like this
// EX: console.log(`Welcome to the user password validator tool`)

// in the reader.question, set up the code this way 
// reader.question("Please enter your password", (answer) => {
//  if(answer.length >= 10 ) {
// console.log(`Success, you are logged in`)    
//} else {
 // console.log(`Password is not long enough`)   
//}   
// reader.close();
//})

// the reader.close() is to finish the program 
// You must put the name and then .close() 
// just for the code to run and work. 