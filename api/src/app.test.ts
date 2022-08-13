/* eslint-disable no-undef */
const request = require('supertest');
const { application } = require('./app');

describe('POST/addTwoNums', () => {
    test('Should return sum of two numbers', async () => request(application)
        .post('/addTwoNums')
        .send({
            num1: '2',
            num2: '2',
        })
        .then((res) => {
            expect(res.body).toEqual({
                answer: 4,
            });
        }));

    test('Should return an error if the request is incorrect', async () => request(application)
        .post('/addTwoNums')
        .send({
            num1: 'not_a_number',
            num2: '2',
        })
        .then((res) => {
            expect(res.body).toEqual({
                error: {
                    num1Error: 'Input must be a number',
                },
                message: 'There was an error',
            });
        }));
});
