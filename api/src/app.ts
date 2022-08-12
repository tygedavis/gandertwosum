const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { addRequestNums } = require('./routeFuntions/addRequestNums');

const app = express();
const port = 3001;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/addTwoNums', (req, res) => {
    try {
        res.status(200).send({
            answer: addRequestNums(req.body.num1, req.body.num2),
        });
    } catch (err) {
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
