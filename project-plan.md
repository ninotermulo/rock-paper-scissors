# ROCK-PAPER-SCISSOR GAME

## A. UNDERSTAND THE PROBLEM/ NEED

I want to create a rock-paper scissor game wherein my opponent is a computer and user must input the choice. Computer generates choice randomly while and user needs to type it in order to choose. The game will be played 5 times and record the stats after every game.

## B. PLAN

1. The game doesn't have a user interface yet. So input typed by user is through prompt and every result will be seen in the console.

2. Only inputs that the program will have is from the user and computer. User input is through prompt and answer will be stored in a variable, while a computer generates randomly and store it also in a variable. I want the variable to be constant and will not change until it starts all over again.

3. The desired output is a 5-round game between the user and computer

### User Stories

1. Create a function called `computerPlay` that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

2. Write a function `playRound` that plays a single round of Rock Paper Scissors. The function should take two parameters - the `playerSelection` and `computerSelection` - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

3. Make the input of user case sensitive

4. We want the fuction to `return` results not `console.log()` but you can use `console.log()` to test the function

5. Write a NEW function called `game()`. Call the `playRound` function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

### Pseudocode

```javascipt
// === get input from user ===
let userInput = prompt("Bet")
let userPlay = case sensitive userInput


// === Create a function computerPlay ===
function computerPlay()
    create random number between number 1-3
    store random number to variable computerInput
    if computerInput is 1
        return ROCK 
    if computerInput is 2
        return PAPER
    if computerInput is 3
        return SCISSOR

// === Create a function playRound ===
function playRound(playerSelection, computerSelection)
    if playerSelection is equal to computerSelection
        return "Tie!"
    if playerSelection is Rock
        if computerSelection is Scissor
            return "You win! Rock beats Scissor"
        if computerSelection is Paper
            return "You lose! Paper beats Rock!"
    if  playerSelection is Paper 
        if computerSelection is Rock
            return "You win! Paper beats Rock"
        if computerSelection is Scissor
            return "You lose! Scissor beats Paper!"
    if  playerSelection is Scissor
        if computerSelection is Paper
            return "You win! Scissor beats Paper"
        if computerSelection is Rock
            return "You lose! Rock beats Scissor!"

// === Create a function game ===
function game() 
    for i = 0; i < 5; i++
        declare variable for userScore
        declare variable for computerScore
        call playRound function and store to variable result *
        print the variable result 
        if variable result has a string of "You win!"
            add 1 to userScore
        if variable result has a string of "You lose!"
            add 1 to computerScore
        print score of variable userScore and computerScore
        loop again to * while i < 5
```