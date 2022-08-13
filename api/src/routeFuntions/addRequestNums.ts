const { isNull, isEmpty, isNumber } = require('lodash');
const {
    MUST_BE_NUMBER_ERROR,
    GENERIC_ERROR,
} = require('../messages');

type ErrorObject = {
    num1Error: string;
    num2Error: string;
    genericError: string;
};

function addTwoNumbers(num1, num2) {
    if (isNull(num1) || Number.isNaN(num1)) {
        throw new Error();
    }

    if (!isNumber(num1) || !isNumber(num2)) {
        throw new Error();
    }

    return num1 + num2;
}

function handleError(num1, num2) {
    const errorMessages = {} as ErrorObject;

    if (isNull(num1) || Number.isNaN(num1)) {
        errorMessages.num1Error = MUST_BE_NUMBER_ERROR;
    }
    if (isNull(num2) || Number.isNaN(num2)) {
        errorMessages.num2Error = MUST_BE_NUMBER_ERROR;
    }

    if (isEmpty(errorMessages)) {
        errorMessages.genericError = GENERIC_ERROR;
    }

    return errorMessages;
}

module.exports = {
    addRequestNums: addTwoNumbers,
    handleErrorMessages: handleError,
};
