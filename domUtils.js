

export function guessEval(input, target) {

    if (input > target) {
        return 1;
    } else if (input < target) {
        return -1;
    } else
        return 0;
}


export function buttonOff() {
    return document.getElementById('guess-button').disabled = true;
}
