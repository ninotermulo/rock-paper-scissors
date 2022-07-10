// === User selection on clicking button ===

let playerSelection;
const choices = document.querySelectorAll('button');
choices.forEach(choice => choice.addEventListener('click', userPlay));
function userPlay(e) {
    const result = e.target.getAttribute("id");
    playerSelection = result.toUpperCase();                                               
};

// === create function that randomly returns ROCK, PAPER, SCISSORS === 
// this is the computer's choice

function computerPlay() {
    // returns number from 1-3
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
    const divResult = document.createElement('div');
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




