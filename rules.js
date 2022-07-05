// === create a function for user's choice ===

function userPlay() {
// === get input from user ===
let userInput = prompt("Pick between rock, paper or scissor");
let userPlayVar = userInput.toUpperCase(0);
// === prevent user from placing invalid answer ===
while (!(userPlayVar === "ROCK" || userPlayVar === "PAPER" || userPlayVar === "SCISSOR")) {
    userInput = prompt("Please type a valid answer");
    userPlayVar = userInput.toUpperCase(0);
}
return userPlayVar;
}

// === create function that randomly returns ROCK, PAPER, SCISSORS === 
// this is the computer's choice

function computerPlay() {
    let computerInput = Math.floor(Math.random() * 3) + 1; // returns number from 1-3
    if (computerInput === 1) {
        return "ROCK";
    } else if (computerInput === 2) {
        return "PAPER";
    } else {
        return "SCISSOR";
    }
}

// === Create a function that plays one round of game ===

function playRound(playerSelection, computerSelection) {
    switch (true) {
        // evaluates first if user and computer has same choice
        case playerSelection === computerSelection:
            return "Tie!";
            break;
        case playerSelection === "ROCK":
            if (computerSelection === "SCISSOR") { 
                return "You win! Rock beats Scissor";
            } else { // if computer selects paper
                return "You lose! Paper beats Rock!";
            }
            break;
        case playerSelection === "PAPER":
            if (computerSelection === "ROCK") {
                return "You win! Paper beats Rock";
            } else { // if computer selects scissor
                return "You lose! Scissor beats Paper!";
            }
            break;
        default: // if player selects scissor
            if (computerSelection === "PAPER") {
                return "You win! Scissor beats Paper";
            } else { // if computer selects rock
                return "You lose! Rock beats Scissor!";
            }                 
    }
}

// === Create a function that plays 5 rounds of the game ===

function game() {
    let userScore = 0;
    let computerScore = 0;
    let roundResult;
    for (let i = 0; i < 5; i++) {
        roundResult = playRound(userPlay(), computerPlay());
        alert(roundResult);
        // returns index position of first letter. If string can't be find, it returns -1
        let roundResultSearch = roundResult.search("You win!");
        // check if roundResult has a string of "Tie!"
        let roundResultTie = roundResult.search("Tie!");
        (roundResultSearch === 0) ? userScore++ : // check if roundResulTie is 0. Index position of Y in "You win!"
            // checks if no "You win!" and "Tie" string
            (roundResultSearch < 0 && roundResultTie < 0) ? computerScore++ :
            userScore; // do nothing
        alert(`Your score: ${userScore} Computer: ${computerScore}`);
    }
}

game();



