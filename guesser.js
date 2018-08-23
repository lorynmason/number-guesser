var randomNumber = Math.floor(Math.random()*100-1)+1;
var userGuess = document.querySelector('.guess1');
var lowOrHi = document.querySelector('.low-or-hi');
var submit1 = document.querySelector('.submit1');
var clear1 = document.querySelector('.clear1');
var reset1 = document.querySelector('.reset1');
var oldGuess = document.querySelector('.old-guess');
var guessWas = document.querySelector('.guess-was');
var maxRangeElem = document.querySelector('.max-range');
var maxRange = 100;
var minRange = 1;
var rangeButton = document.querySelector('.user-range-button')

submit1.addEventListener('click', numberCheck);
reset1.addEventListener('click', resetAll);
userGuess.addEventListener('keydown', enableButton1);
rangeButton.addEventListener('click', setUserRange);

function setUserRange() {
  maxRange = maxRangeElem.value;
  minRange = document.querySelector('.min-range').value;
  parseMinRange = Math.ceil(parseInt(minRange));
  parseMaxRange = Math.floor(parseInt(maxRange));
  randomNumber = Math.floor(Math.random() * (parseMaxRange - parseMinRange)) + parseMinRange;
  guessWas.innerText = 'Guess a Number Between ' + minRange + '-' + maxRange;
  oldGuess.innerText = '?';
  lowOrHi.innerText = 'Enter Your Guess';
}

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
    event.preventDefault();
    alert('ERROR! Enter a number in the range.');
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
  resetInputs();
  randomNumber = Math.floor(Math.random() * 100) + 1;
  maxRange = 100;
  minRange = 1;
} 

function resetInputs() {
  document.querySelector('.max-range').value = '';
  document.querySelector('.min-range').value = '';
  userGuess.value = '';
}
