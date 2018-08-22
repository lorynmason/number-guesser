var randomNumber = Math.floor(Math.random()*100) + 1;
var userGuess = document.querySelector('.guess1');
var lowOrHi = document.querySelector('.low-or-hi');
var submit1 = document.querySelector('.submit1');
var clear1 = document.querySelector('.clear1');
var reset1 = document.querySelector('.reset1');
var oldGuess = document.querySelector('.old-guess');
//var oldGuess = document.querySelector('.old-guess').innerText;
var guessWas = document.querySelector('.guess-was');
// var guessWas = document.querySelector('.guess-was').innerText;
var maxRange = 100;
var minRange = 1;

submit1.addEventListener('click', numberCheck);
reset1.addEventListener('click', resetAll);
userGuess.addEventListener('keydown', enableButton1);

function enableButton1() {
  clear1.removeAttribute('disabled');
}

function enableButton2() {
  reset1.removeAttribute('disabled');
}

function numberCheck(event) {
  event.preventDefault();
  parseUserGuess = parseInt(userGuess.value);
  if (minRange <= parseUserGuess && parseUserGuess <= maxRange) {
    checkGuess();
  } else {
    alert('ERROR! Enter a number in the range.')
  }
}

function checkGuess() {
  guessWas.innerText = 'Your guess was';
  oldGuess.innerText = userGuess.value;
    if (parseUserGuess > randomNumber) {
    lowOrHi.innerText = 'That is too high';
  } else if (parseUserGuess < randomNumber){
    lowOrHi.innerText = 'That is too low';
  } else {
    lowOrHi.innerText = 'BOOM!';
    enableButton2();
  }
}

function resetAll() {
  guessWas.innerText = 'Play Again';
  oldGuess.innerText = '?';
  lowOrHi.innerText = 'Enter a New Number';
  userGuess.value = '';
  randomNumber = Math.floor(Math.random()*100) + 1;
}
