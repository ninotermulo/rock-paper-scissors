// Add Event Listener

// Get user's input 
function getUserChoice() {
    const userChoice = (prompt("Rock, Paper, or Scissor?")).toLowerCase();
    // No functionality yet to reject number inputs
    if (userChoice.includes('r') && userChoice.includes('c') && userChoice.includes('k')) {           
      return 'Rock';
    }
    else if (userChoice.includes('p') && userChoice.includes('a') && userChoice.includes('r')) {
      return 'Paper';
    }
    else if (userChoice.includes('s') && userChoice.includes('c') && userChoice.includes('r')) { 
      return 'Scissor';
    }
  }
  
  // Get computer's input
  function getComputerChoice() {
    const computerChoice = Math.floor((Math.random() * 3)) + 1;
    switch(computerChoice) {
      case 1:
        return "Rock";
      case 2:
        return "Paper";
      case 3:
        return "Scissor";
    }
  }
  
  function playFiveRounds() {
    let userScore = 0;
    let computerScore = 0;
    let userPick;
    let computerPick;
    
    for (let i = 1; i <= 5; i++) {
    userPick = getUserChoice();
    computerPick = getComputerChoice();
    switch (true) {
      case userPick == "Rock" && computerPick == "Rock":
      case userPick == "Paper" && computerPick == "Paper":
      case userPick == "Scissor" && computerPick == "Scissor":
        alert(`Tie! ${userPick} negates ${computerPick}
        You - ${userScore}
        Opponent - ${computerScore}`);
        break;
      case userPick == "Rock" && computerPick == "Scissor":
      case userPick == "Paper" && computerPick == "Rock":
      case userPick == "Scissor" && computerPick == "Paper":
        ++userScore;
        alert(`Nice! ${userPick} beats ${computerPick}
        You - ${userScore}
        Opponent - ${computerScore}`);
        break;
      default:
        ++computerScore;
        alert(`Bummer! ${computerPick} beats ${userPick}
        You - ${userScore}
        Opponent - ${computerScore}`);
        break;
    }
    if (i == 5) {
      if (userScore > computerScore) {
        alert(`${userScore} - ${computerScore}: you win!`);
      } else if (userScore < computerScore) {
        alert(`${userScore} - ${computerScore}: you lose!`); 
      } else {
        alert(`${userScore} - ${computerScore}: draw!`); 
      }  
    } 
    }
  }
  
  playFiveRounds();