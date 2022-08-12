/* eslint-disable no-undef */
const request = require('supertest');
const { app } = require('./app');

describe('POST/addTwoNums', () => {
    test('Should return sum of two numbers', async () => {
        const response = await request(app)
            .post('/addTwoNums')
            .send({
                num1: 2,
                num2: 2,
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            answer: 4,
        });
    });

    test('Should return an error if the request is incorrect', async () => {
        const response = await request(app)
            .post('/addTwoNums')
            .send({
                num1: 'not_a_number',
                num2: 2,
            });
        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({
            message: 'There was an error',
            error: 'Inputs must be a number',
        });
    });
});
