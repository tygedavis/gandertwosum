const _ = require('lodash');

function addTwoNumbers(num1, num2) {
    if (!num1 || !num2) {
        throw new Error('Must provide 2 numbers');
    }

    if (!_.isNumber(num1) || !_.isNumber(num2)) {
        throw new Error('Inputs must be a number');
    }

    return num1 + num2;
}

module.exports = {
    addRequestNums: addTwoNumbers,
};
