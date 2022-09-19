//Third party module
const prompt = require('prompt-sync')({sigint: true});

//Creating an array to hold the possible game entries
let options = ["rock","paper","scissors!"];

//Consoled out a message asking if ready to play and using a method call to list the options array elements
console.log(`Ready to play`);
options.forEach(element => console.log(element));

//Created variables to hold the possible outcomes
let tied = "It's a draw, lets play again! :-)~< "
let winPlayer1 = "Player 1 wins!"
let winPlayer2 = "Player 2 wins!" 

//Created variable to prompt player1 to enter input
let player1 = prompt("Player 1: Enter rock, paper, or scissors: ");

//Created if statement to validate input of player1
if (player1 !== "rock" && player1 !== "paper" && player1 !== "scissors") {
        player1 = prompt("Invalid, please enter: rock, paper, or scissors!");  
} 

//Created variable to prompt player2 to enter input
let player2 = prompt("Player 2: Enter rock, paper, or scissors: ");

//Created if statement to validate input of player2
if (player2 !== "rock" && player2 !== "paper" && player2 !== "scissors"){
    player2 = prompt("Invalid, please enter: rock, paper, or scissors!");
}

//Created if statement to handle invalid (blanks or numbers) entries from players
if (((player1 === "") && (player2 === "")) || (!isNaN(player1) && (!isNaN(player2)))) {
    console.log("Blanks or numbers are not valid!")
    return false;  //This ends game in terminal
}

//Created if statement to handle rules of game to include draws
if (player1 === player2) {
    console.log(`${tied}`);
} else if (
    (player1 === "paper" && player2 === "rock") ||
    (player1 === "scissors" && player2 === "paper") ||
    (player1 === "rock" && player2 === "scissors")
) {
    console.log(`${winPlayer1}`);
} else {
    console.log(`${winPlayer2}`);
}