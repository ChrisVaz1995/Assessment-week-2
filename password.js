const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question(`Welcome to the user password validator tool. Please enter a password with no more then 10 characters long`, function() {
    let enterPassword = prompt(`Please enter your password`);

    if (enterPassword.length >= 10) {
        console.log(`${enterPassword} ${enterPassword.length}`);
    } else {
        console.log(`Sorry, but the password is either short or have exceeded the character limit. Please try again.`);
    }
});

