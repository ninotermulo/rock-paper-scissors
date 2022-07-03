// ask user for input and store to variable
const userInput = prompt("Choose you warrior")
// change user input to case sensitive answer
const userChoice = userInput.toUpperCase(0); 

// ask computer for input and store to variable
function computerPick() {
    const computerPick = Math.floor(Math.random() * 3 + 1);
    switch (true) {
        case computerPick === 1:
            return "ROCK";
            break;
        case computerPick === 2:
            return "PAPER";
            break;
        case computerPick === 3:
            return "SCISSOR";
            break;
        default:
            return "Something is Wrong";
    }
}

// ROCK
// PAPER
// SCISSOR

// compare input
const computerChoice = computerPick() 
if (userChoice === computerChoice) {
    console.log("Tie!");
} else if (userChoice === "ROCK") {
    switch (true) {
        case computerChoice === "PAPER":
            console.log("You lose! PAPER BEATS ROCK!");
        case computerChoice === "SCISSOR":
            console.log("You win! ROCK BEATS PAPER");
        default:
            console.log("Error: user choice rock")
    }
} else if (userChoice === "PAPER") {
    switch (true) {
        case computerChoice === "SCISSOR":
            console.log("You lose! SCISSOR BEATS PAPER!");
        case computerChoice === "ROCK":
            console.log("You win! PAPER BEATS ROCK");
        default:
            console.log("Error: user choice paper")
    }
} else if (userChoice === "SCISSOR") {
    switch (true) {
        case computerChoice === "ROCK":
            console.log("You lose! ROCK BEATS SCISSOR!");
        case computerChoice === "PAPER":
            console.log("You win! SCISSOR BEATS PAPER");
        default:
            console.log("Error: user choice scissor");
    }
} else {
    
}


// if user wins display message that you win
// if computer wins, display message the you lose
// play for 5 times and record stats and report winner or loser at the end

