/* eslint-disable prefer-destructuring */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const _ = require('lodash');
const { addRequestNums, handleErrorMessages } = require('./routeFuntions/addRequestNums');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post('/addTwoNums', (req, res) => {
    let num1 = null;
    let num2 = null;
    const regex = /[0-9]/;
    if (_.isNumber(req.body.num1)) {
        num1 = req.body.num1;
    }
    else if (_.isString(req.body.num1) && req.body.num1.match(regex)) {
        num1 = _.toNumber(req.body.num1);
    }
    if (_.isNumber(req.body.num2)) {
        num2 = req.body.num2;
    }
    else if (_.isString(req.body.num2) && req.body.num2.match(regex)) {
        num2 = _.toNumber(req.body.num2);
    }
    try {
        res.status(200).send({
            answer: addRequestNums(num1, num2),
        });
    }
    catch (err) {
        const error = handleErrorMessages(num1, num2);
        res.status(400).send({
            message: 'There was an error',
            error,
        });
    }
});
module.exports = {
    application: app,
};
//# sourceMappingURL=app.js.map