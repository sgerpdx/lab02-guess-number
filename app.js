// import functions and grab DOM elements


const guessCounter = document.getElementById('counter');
const numberGuess = document.getElementById('number-guess');
const guessButton = document.getElementById('guess-button');


// initialize state

let remainingGuesses = 4;

guessButton.addEventListener('click', () => {

    let randomNumber = Math.ceil(Math.random() * 20);


});





// set event listeners to update state and DOM