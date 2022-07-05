# ROCK-PAPER-SCISSOR GAME

## A. UNDERSTAND THE PROBLEM/ NEED

Create a rock-paper scissor game wherein opponent is a computer and user must input the choice. Computer generates choice randomly while and user needs to type it in order to choose. The game will be played 5 times and record the stats after every game.

## B. PLAN

1. The game doesn't have a user interface yet. So input typed by user is through prompt and every result will be seen in the window popup through `alert()`.

2. Only inputs is from user and computer. User input is through prompt and answer will be stored in a variable, while a computer generates randomly then stores to variable. The value inside the variables will not change until it starts all over again.

3. The desired output is a 5-round game between the user and computer

### User Stories

1. Create a function called `computerPlay` that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

2. Write a function `playRound` that plays a single round of Rock Paper Scissors. The function should take two parameters - the `playerSelection` and `computerSelection` - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

3. Make the input of user case sensitive

4. We want the fuction to `return` results not `console.log()` but you can use `console.log()` to test the function

5. Write a new function called `game()`. Call the `playRound` function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

### Pseudocode

```javascipt

// === Create a function userPlay ===
function userPlay()
// get input from user
let userInput = prompt("Please choose Rock, Paper, Scissor")
let userPlay = case sensitive userInput
// prevent user from placing invalid answer
while userPlay is not ROCK, PAPER OR SCISSOR
    userInput = prompt("Please type a valid answer")
    userPlay = case sensitive userInput
    
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
        call playRound function and store to variable roundResult *
        print the variable roundResult 
        declare variable roundResultSearch that checks if roundResult has string "You win!"
        declare variable roundResultTie that checks if roundResult has sting "Tie!"
        if roundResultSearch has a string of "You win!"
            add 1 to userScore
        if roundResultSearch has no string of "You win!" and roundResultTie has no string of "Tie!"
            add 1 to computerScore
        else do nothing
        print score of variable userScore and computerScore
        loop again to * while i < 5
```