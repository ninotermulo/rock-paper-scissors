// === create a function for user's choice ===

function userPlay() {
// === get input from user ===
let userInput = prompt("Pick between rock, paper or scissor");
let userPlay = userInput.toUpperCase(0);
// === prevent user from placing invalid answer ===
while (!(userPlay === "ROCK" || userPlay === "PAPER" || userPlay === "SCISSOR"  )) {
    userInput = prompt("Please type a valid answer");
    userPlay = userInput.toUpperCase(0);
}
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

// === Create a function that plays one round of game ===
function playRound(playerSelection, computerSelection) {
    switch (true) {
        // evaluates first if user and computer has same choice
        case playerSelection === computerSelection:
            return "Tie!";
            break;
        case playerSelection === "ROCK":
            if (computerSelection === "SCISSOR") { 
                return "You win! Rock beats Scissor"
            } else { // if computer selects paper
                return "You lose! Paper beats Rock!"
            }
            break;
        case playerSelection === "PAPER":
            if (computerSelection === "ROCK") {
                return "You win! Paper beats Rock"
            } else { // if computer selects scissor
                return "You lose! Scissor beats Paper!"
            }
            break;
        default: // if player selects scissor
            if (computerSelection === "SCISSOR") {
                return "You win! Scissor beats Paper"
            } else { // if computer selects rock
                return "You lose! Rock beats Scissor!"
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
        if (roundResult.search("You win!")) { // searches for string "You win!"
            userScore++;
        }
        else { // if there's no string that contains "You win!" 
            computerScore++;    
        }
        alert(`Your score: ${userScore} Computer: ${computerScore}`);
    }
}

game();
