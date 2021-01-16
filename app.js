

import { guessEval, buttonOff } from './domUtils.js';


const guessTracker = document.getElementById('counter');
const guess = document.getElementById('number-guess');
const userFeedback = document.getElementById('feedback-message');
const guessButton = document.getElementById('guess-button');

let remainingGuesses = 4;
let randomNumber = Math.ceil(Math.random() * 20);


guessButton.addEventListener('click', () => {

    remainingGuesses = (remainingGuesses - 1);
    const guessInput = guess.valueAsNumber;



    if (guessEval(guessInput, randomNumber) > 0) {

        userFeedback.textContent = 'Too high - try again!';
        guessTracker.textContent = `You have ${remainingGuesses} chances left to guess.`;

        if (remainingGuesses < 1) {
            guessTracker.textContent = 'Sorry, you are out of guesses.';
            return;
        } else {
            userFeedback.textContent = 'Too high - try again!';
            guessTracker.textContent = `You have ${remainingGuesses} chances left to guess.`;
        }

    } else if (guessEval(guessInput, randomNumber) < 0) {

        userFeedback.textContent = 'Too low - try again!';
        guessTracker.textContent = `You have ${remainingGuesses} chances left to guess.`;

    } else {

        userFeedback.textContent = 'Congratulations! You guessed correctly!';
        buttonOff();

    }


    if (remainingGuesses <= 0) {

        userFeedback.textContent = 'Better luck next time!';
        guessTracker.textContent = 'Sorry, you are out of guesses.';
        buttonOff();

    }


});




