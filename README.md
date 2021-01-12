# GUESS-A-NUMBER APP

## Outcome:

This app will generate a random integer between 0 and 20 and prompt the user to guess, will 4 chances to do so. Feedback will be displayed based on guesses relative to the correct number.

## HTML structure/tags:

* number input
* button to submit guess
* button to play again (STRETCH goal)
* span to display remaining guesses
* span for feedback (too high/too low/congrats/sorry)

## Functionality:

* grab DOM elements for relevent HTML, using IDs
    - log to console to validate
* initialize states:
    - random #
        - log to console to validate
    - guesses remaining (start at 4)
        - log to console to validate
* add a function to evaluate the user input compared to the random #, and export for the Event Listener
    - log to console to validate
    - test this function 
* add Event Listener for:
    - guess button:
        - on click: initialize states, call function
        - log to console to validate
    - reset button:
        - on click, re-initialize states
        - log to console to validate

