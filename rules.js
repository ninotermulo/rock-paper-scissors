// === User selection on clicking button ===

const choices = document.querySelectorAll('button');
choices.forEach(choice => choice.addEventListener('click', playRound));

function playRound(e) {
    const divResult = document.createElement('div');
    document.body.appendChild(divResult);  
    const buttonResult = e.target.getAttribute("id");

    const playerSelection = buttonResult.toUpperCase();
    const computerSelection = computerPlay();
    switch (true) {
        // evaluates first if user and computer has same choice
        case playerSelection === computerSelection:
            divResult.innerText = "Tie!";
            break;
        case playerSelection === "ROCK":
            if (computerSelection === "SCISSOR") {
                divResult.innerText = "You win! Rock beats Scissor";
            } else { // if computer selects paper
                divResult.innerText = "You lose! Paper beats Rock!";
            }
            break;
        case playerSelection === "PAPER":
            if (computerSelection === "ROCK") {
                divResult.innerText = "You win! Paper beats Rock";
            } else { // if computer selects scissor
                divResult.innerText = "You lose! Scissor beats Paper!";
            }
            break;
        default: // if player selects scissor
            if (computerSelection === "PAPER") {
                divResult.innerText = "You win! Scissor beats Paper";
            } else { // if computer selects rock
                divResult.innerText = "You lose! Rock beats Scissor!";
            }             
    }
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


      






