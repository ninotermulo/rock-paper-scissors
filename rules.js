// === get input from user ===

let userInput = prompt("Pick between rock, paper or scissor");
let userPlay = userInput.toUpperCase(0);

// === prevent user from placing invalid answer ===

while (!(userPlay === "ROCK" || userPlay === "PAPER" || userPlay === "SCISSOR"  )) {
    userInput = prompt("Please type a valid answer");
    userPlay = userInput.toUpperCase(0);
}

// === create function that randomly returns ROCK, PAPER, SCISSORS === 
// this is the computer's choice

function computerPlay() {
    let computerInput = Math.floor(Math.random() * 3) + 1;
    if (computerInput === 1) {
        return "ROCK";
    } else if (computerInput === 2) {
        return "PAPER";
    } else {
        return "SCISSOR";
    }
}