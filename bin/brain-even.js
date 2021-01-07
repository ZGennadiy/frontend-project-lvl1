#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greetByName from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const userName = greetByName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const isEven = (num) => num % 2 === 0;
const getRandomNumber = (maxNumber = 100) => Math.ceil(Math.random() * maxNumber);
const isCorrectAnswer = (num, answer) => (isEven(num) && answer.toLowerCase() === 'yes')
  || (!isEven(num) && answer.toLowerCase() === 'no');
const getCorrectAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const evenGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if (isCorrectAnswer(randomNumber, answer)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was '${getCorrectAnswer(
        randomNumber,
      )}'.
      Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

evenGame();
