

import { guessEval } from './domUtils.js';


const guessTracker = document.getElementById('counter');
const guess = document.getElementById('number-guess');
const userFeedback = document.getElementById('feedback-message');
const guessButton = document.getElementById('guess-button');


let remainingGuesses = 4;
let randomNumber = Math.ceil(Math.random() * 20);
console.log(randomNumber);


guessButton.addEventListener('click', () => {

    remainingGuesses = (remainingGuesses - 1);

    const guessInput = guess.valueAsNumber;

    if (guessEval(guessInput, randomNumber) > 0) {


        userFeedback.textContent = 'Too high - try again!';
        guessTracker.textContent = `You have ${remainingGuesses} chances left to guess.`;

    } else if (guessEval(guessInput, randomNumber) < 0) {


        userFeedback.textContent = 'Too low - try again!';
        guessTracker.textContent = `You have ${remainingGuesses} chances left to guess.`;

    } else {

        userFeedback.textContent = 'Congratulations! You guessed correctly!';
        return;
    }







});





// set event listeners to update state and DOM


