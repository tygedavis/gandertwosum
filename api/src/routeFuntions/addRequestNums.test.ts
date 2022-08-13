/* eslint-disable no-undef */
const { addRequestNums, handleErrorMessages } = require('./addRequestNums');

describe('addRequestNumsFuncs', () => {
    describe('addTwoNumbers', () => {
        test('Should add two numbers', () => {
            expect(addRequestNums(2, 2)).toBe(4);
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

        test('Should add large numbers', () => {
            expect(addRequestNums(20000000, 20000000)).toBe(40000000);
        });

        test('Should add zero and zero together', () => {
            expect(addRequestNums(0, 0)).toBe(0);
        });

        test('Should fail if non number is passed', () => {
            expect(() => {
                addRequestNums('Not_a_number', 2);
            }).toThrow();
        });

        test('Should fail if no parameters are passed', () => {
            expect(() => {
                addRequestNums();
            }).toThrow();
        });

        test('Should fail if only one parameter is passed', () => {
            expect(() => {
                addRequestNums(1);
            }).toThrow();
        });
    });

    describe('handleErrorMessages', () => {
        test('Should return a generic message if no problems are detected', () => {
            expect(handleErrorMessages(0, 1)).toEqual({
                genericError: 'Cannot find error, please try again...',
            });
        });

        test('Should return an object with errors for num1 if not equal to a number', () => {
            expect(handleErrorMessages(null, 1)).toEqual({
                num1Error: 'Input must be a number',
            });
        });

        test('Should return an object with errors for num2 if not equal to a number', () => {
            expect(handleErrorMessages(1, NaN)).toEqual({
                num2Error: 'Input must be a number',
            });
        });

        test('Should return an object with errors for num1 & num2 if not equal to a number', () => {
            expect(handleErrorMessages(null, null)).toEqual({
                num1Error: 'Input must be a number',
                num2Error: 'Input must be a number',
            });
        });
    });
});
