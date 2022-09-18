const prompt = require('prompt-sync')({sigint: true}); //Prompts user input

let pinCode = 1234; 

let enterCode = Number(prompt("Please enter pin code: "));

if (enterCode === 1234) {
    console.log("Succes!  You have opened lock box!")
}  else if (enterCode !== 1234) {
    console.log("Failure!  Incorrect pin code.")
}
