const express = require('express');
const bodyParser = require('body-parser');
const { addRequestNums } = require('./routeFuntions/addRequestNums');
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post('/addTwoNums', (req, res) => {
    try {
        res.status(200).send({
            answer: addRequestNums(req.body.num1, req.body.num2),
        });
    }
    catch (err) {
        console.log('*** err ***', err);
        res.status(400).send({
            message: 'There was an error',
            error: err.message,
        });
    }
});
app.listen(port, () => console.log(`Express is listening at http://localhost:${port}`));
module.exports = {
    app,
};
//# sourceMappingURL=app.js.map