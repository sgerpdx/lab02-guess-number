

import { guessEval } from './utils.js';

const test = QUnit.test;

// reference from quiz-app

test('if the value of input is greater than the value of target, 1 should be returned', (assert) => {

    const input = 7;
    const target = 4;
    const expected = 1;
    const actual = guessEval(input, target);

    assert.equal(actual, expected);

});

test('if the value of input is less than the value of target, -1 should be returned', (assert) => {

    const input = 7;
    const target = 11;
    const expected = -1;
    const actual = guessEval(input, target);

    assert.equal(actual, expected);

});

test('if the value of input is equal to the value of target, 0 should be returned', (assert) => {

    const input = 7;
    const target = 7;
    const expected = 0;
    const actual = guessEval(input, target);

    assert.equal(actual, expected);

});