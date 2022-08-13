# GanderSum

## About
GanderSum is a simple sum calculator for two numbers. It is a full stack app.

The front end is built using React and TypeScript. Unit tests are performed using Jest and Enzyme.

The back end is built using NodeJS, TypeScript, and Express. Unit tests are performed using Jest.

------

## Instructions for local instalation
* Clone this repository
* In one terminal, cd into /app
   * First run `npm install`
   * Then run `npm run start`
   * App will be available at http://localhost:3000/
* In another terminal, cd into /api
   * First run `npm install`
   * Then run `npm run serve`
* Add all the numbers you want

------

### API Documentation
```javascript
POST /addTwoNums

{
    num1: Integer
    num2: Integer
}
```
>Note: Both num1 and num2 can be numbers in a string and still work.
>
>Example
```javascript
{
   num1: "2", // This will still work
   num2: 2
}
```

------

### TODO
#### API
- [X] Build express server

- [X] Unit tests

- [X] Error handling

- [X] Improve unit tests to close async calls when finished

#### APP
- [X] Build front end app with inputs

- [X] Build the app to be responsive

- [X] App sends request to API to add the numbers

- [X] Error handling

- [ ] Unit tests

- [ ] ~~Use less/Sass for styling~~ (Not going to do)
