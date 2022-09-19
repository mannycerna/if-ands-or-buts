const prompt = require('prompt-sync')({sigint: true}); //Prompts user input

let pinCode = 1234; 

let enterCode = Number(prompt("Please enter four digit pin code:  "));

if (enterCode === pinCode) {
    console.log("Succes!  You have opened lock box!")
}  else if (enterCode !== pinCode) {
    console.log("Failure!  Incorrect pin code.")
}
