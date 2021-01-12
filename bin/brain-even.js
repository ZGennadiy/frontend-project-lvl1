#!/usr/bin/env node

import greetByName from '../src/cli.js';
import evenGame from '../src/even-game.js';

console.log('Welcome to the Brain Games!');

const userName = greetByName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

evenGame(userName);
