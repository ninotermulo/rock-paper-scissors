// === get input from user ===

let userInput = prompt("Pick between rock, paper or scissor");
let userPlay = userInput.toUpperCase(0);

// === prevent user from placing invalid answer ===

while (!(userPlay === "ROCK" || userPlay === "PAPER" || userPlay === "SCISSOR"  )) {
    userInput = prompt("Please type a valid answer");
    userPlay = userInput.toUpperCase(0);
}


