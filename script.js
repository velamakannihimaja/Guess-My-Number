'use strict';
/*
//getting text cotent from the browser element
console.log(document.querySelector('.message').textContent);
//Setting value to the html element
document.querySelector('.message').textContent = 'Correct Number!';

console.log(document.querySelector('.message').textContent);

console.log(document.querySelector('.number').textContent);
console.log(document.querySelector('.score').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//for imput field like form we use 'value' to get the value
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 13;
console.log(document.querySelector('.guess').value);
*/

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// console.log(score, typeof score);
// console.log(randomNumber);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (guess && guess > 20) {
    document.querySelector('.message').textContent =
      'Guess a number in between 1 to 20 🛑';
  } else if (guess && guess <= 20 && score > 1) {
    if (guess > randomNumber) {
      document.querySelector('.message').textContent = 'provide lesser number';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < randomNumber) {
      document.querySelector('.message').textContent = 'provide higher number';
      score = score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.number').textContent = guess;
      document.querySelector('.message').textContent =
        '😀😀 You have guessed the number';
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '30rem';
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    }
  } else {
    document.querySelector('.message').textContent = '😥😣 Lost the game';
    document.querySelector('.message').style.color = 'red';
    ('red');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
