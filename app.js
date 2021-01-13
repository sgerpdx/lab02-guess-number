

import { guessEval } from './domUtils.js';


const guessTracker = document.getElementById('counter');
const guess = document.getElementById('number-guess');
const userFeedback = document.getElementById('feedback-message');
const guessButton = document.getElementById('guess-button');

// const reLaunch = document.getElementById('play-again');


let remainingGuesses = 4;
let randomNumber = Math.ceil(Math.random() * 20);


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

    // Now I just need to put in the limit on guesses (and correct guesses) so that after 4 or after a correct guess, the function is exited.
    // While Loop: has been attempted, will be attempted again.
    // Also add functionality for the button to play again after the game is complete.


});




