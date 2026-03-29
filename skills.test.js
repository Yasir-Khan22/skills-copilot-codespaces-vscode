const test = require('node:test');
const assert = require('node:assert/strict');

const { calculateNumbers } = require('./skills');

test('adds two positive numbers', () => {
    assert.equal(calculateNumbers(2, 3), 5);
});

test('adds negative and positive numbers', () => {
    assert.equal(calculateNumbers(-4, 10), 6);
});

test('throws for non-number inputs', () => {
    assert.throws(() => calculateNumbers('2', 3), TypeError);
    assert.throws(() => calculateNumbers(2, null), TypeError);
});

test('throws for NaN inputs', () => {
    assert.throws(() => calculateNumbers(NaN, 3), TypeError);
    assert.throws(() => calculateNumbers(2, NaN), TypeError);
});
