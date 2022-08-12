/* eslint-disable no-undef */
const { addRequestNums } = require('./addRequestNums');

test('Should add two numbers', () => {
    expect(addRequestNums(2, 2)).toBe(4);
});

test('Should fail if non number is passed', () => {
    expect(() => {
        addRequestNums('Not_a_number', 2);
    }).toThrow('Inputs must be a number');
});

test('Should fail if no parameters are passed', () => {
    expect(() => {
        addRequestNums();
    }).toThrow('Must provide 2 numbers');
});

test('Should fail if only one parameter is passed', () => {
    expect(() => {
        addRequestNums(1);
    }).toThrow('Must provide 2 numbers');
});

test('Should only add the first two numbers passed to it', () => {
    expect(addRequestNums(2, 2, 2)).toBe(4);
});

test('Should add decimals', () => {
    expect(addRequestNums(2.5, 2.5)).toBe(5);
});

test('Should add negatives', () => {
    expect(addRequestNums(-2, -2)).toBe(-4);
});
