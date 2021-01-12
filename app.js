// import functions and grab DOM elements

import { guessEval } from './domUtils.js';


const guessTracker = document.getElementById('counter');
const guess = document.getElementById('number-guess');
const userFeedback = document.getElementById('feedback-message');
const guessButton = document.getElementById('guess-button');

console.log('whaaatup');


let remainingGuesses = 4;
let randomNumber = Math.ceil(Math.random() * 20);
console.log(randomNumber);

guessButton.addEventListener('click', () => {


    const guessInput = guess.valueAsNumber;


    if (guessEval(guessInput, randomNumber) > 0) {

        remainingGuesses = remainingGuesses--;
        userFeedback.textContent = 'Too high - try again!';
        guessTracker.textContent = `You have ${remainingGuesses} chances left to guess.`;

    } else if (guessEval(guessInput, randomNumber) < 0) {

        remainingGuesses = remainingGuesses--;
        userFeedback.textContent = 'Too low - try again!';
        guessTracker.textContent = `You have ${remainingGuesses} chances left to guess.`;

    } else {

        userFeedback.textContent = 'Congratulations! You guessed correctly!';
        return;
    }



    console.log(userFeedback.textContent);
    console.log(guessTracker.textContent);
    console.log(remainingGuesses);


});





// set event listeners to update state and DOM


