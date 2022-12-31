let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
  }  
const compareGuesses = (_humanGuess, _computerGuess, _targetGuess)=>{
humanDifference = Math.abs(humanScore - computerScore)
computerDifference = Math.abs(computerScore - humanScore)
return humanDifference <= computerDifference}

const updateScore = (winner) => {
    if (winner === 'human') {
        computerScore++;
    } else {
        humanScore++;
    }
}
const advanceRoundNumber = () => currentRoundNumber++;
