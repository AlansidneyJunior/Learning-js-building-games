var numOfGuess = 1;
var randomNumber = Math.floor((Math.random() * 100) + 1);
console.log(randomNumber);

var userGuess = document.getElementById('user-guess');
var sendBtn = document.getElementById('send-btn');

var lastGuesses = document.getElementById('last-guesses');
var result = document.getElementById('result');
var lowOrHighGuess = document.getElementById('low-or-high-guess');

userGuess.focus();// cursor automático no input;
sendBtn.addEventListener('click', checkGuess);
var guessNumber;
var resetBtn;

function checkGuess() {
    guessNumber = Number(userGuess.value);

    if (numOfGuess === 1) {
        lastGuesses.textContent = "Last Guesses: ";
    }
    lastGuesses.textContent += guessNumber + " ";

    if (numOfGuess >= 10) {
        //Fim de jogo
        result.textContent = "You dont have more Guesses, You Lose!!!";
        result.style.color = "white";
        result.style.backgroundColor = "red";
        endGame();
    } else if (guessNumber === randomNumber) {
        //Usuário acertou
        result.textContent = "Right Number, You Win!!!";
        result.style.color = "white";
        result.style.backgroundColor = "green";
        endGame();

    } else {
        result.textContent = "Wrong Number!";

        if (guessNumber < randomNumber) {
            //user guess low
            lowOrHighGuess.textContent = "The number is too Low. Try Again!"
        } else {
            //user guess high
            lowOrHighGuess.textContent = "The number is too High. Try Again!"
        }
    }
    numOfGuess++;
    userGuess.value = '';
    userGuess.focus(); 
}

function endGame() {
    userGuess.disabled = true;
    sendBtn.disabled = true;

    lowOrHighGuess.textContent = '';

    resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reset Game?';
    document.body.appendChild(resetBtn);
    resetBtn.addEventListener('click',resetGame);

}

function resetGame(){
    numOfGuess = 1;

    lastGuesses.textContent = '';
    result.textContent = '';

    resetBtn.parentNode.removeChild(resetBtn);

    userGuess.disabled = false;
    sendBtn.disabled = false;
    userGuess.focus();

    result.style.backgroundColor = 'white';
    result.style.color = 'black';
    randomNumber = Math.floor((Math.random() * 100) + 1);
    console.log(randomNumber);
}