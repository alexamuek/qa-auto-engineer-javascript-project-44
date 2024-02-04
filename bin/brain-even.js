#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRandomInt from '../src/getRandomInt.js';

const minValue = 0;
const maxValue = 100;

let randomNumber;
let userAnswer;
let expectedAnswer;
let i = 0;

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log('Answer "yes" if the number is even, otherwise answer "no".');

while (i < 3) {
  randomNumber = getRandomInt(minValue, maxValue);

  if (randomNumber % 2 === 0) {
    expectedAnswer = 'yes';
  } else {
    expectedAnswer = 'no';
  }

  readlineSync.question(`Question: ${randomNumber}`);
  userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer.toLowerCase() === expectedAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'`);
    break;
  }
  i += 1;
}

if (i === 3) {
  console.log(`Congratulations, ${userName}!`);
}
