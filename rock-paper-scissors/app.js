const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
  getResult();
}));

function generateComputerChoice() {
  const randomNumber = Math.floor (Math.random() * 3) + 1;
  if (randomNumber === 1){
    computerChoice = 'rock';
  }else if(randomNumber === 2){
    computerChoice = 'paper';
  }else if(randomNumber === 3){
    computerChoice = 'scissors';
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
  if (computerChoice == userChoice){
    result = 'Draw!';
  }
  if (computerChoice === 'rock' && userChoice === 'paper'){
    result = 'User Wins!';
  }
  if (computerChoice === 'rock' && userChoice === 'scissors'){
    result = 'Computer Wins!';
  }
  if (computerChoice === 'paper' && userChoice === 'rock'){
    result = 'Computer Wins!';
  }
  if (computerChoice === 'paper' && userChoice === 'scissors'){
    result = 'User Wins!';
  }
  if (computerChoice === 'scissors' && userChoice === 'paper'){
    result = 'Computer Wins!';
  }
  if (computerChoice === 'scissors' && userChoice === 'rock'){
    result = 'User Wins!'
  }
  resultDisplay.innerHTML = result;
}