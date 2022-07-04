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