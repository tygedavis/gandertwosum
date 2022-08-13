import React from 'react';
import axios from 'axios';
import * as _ from 'lodash';
import './App.css';

function App() {
    const [num1, setNum1] = React.useState('');
    const [num2, setNum2] = React.useState('');
    const [answer, setAnswer] = React.useState(0);
    const [classes, setClasses] = React.useState({
        answerClasses: 'hide',
        inputClasses: '',
        inputErrorClasses: 'hide'
    });
    const [errorMessage, setErrorMessage] = React.useState('');

    function updateValue(e: any) {
        const valueToUpdate = e.target.name;
        if (valueToUpdate === 'num1') {
            setNum1(e.target.value);
        } else if (valueToUpdate === 'num2') {
            setNum2(e.target.value);
        }
    }

    function handleSubmit(e: any) {
        e.preventDefault();

        const url = 'http://localhost:3001';

        axios.post(url + '/addTwoNums', {
            num1: _.toNumber(num1),
            num2: _.toNumber(num2),
        }).then((res) => {
            if (res.data.answer > 0) {
                setClasses({
                    ...classes,
                    answerClasses: '',
                    inputClasses: '',
                    inputErrorClasses: 'hide'
                })
            }

            setAnswer(res.data.answer);
        }).catch((err) => {
            setClasses({
                ...classes,
                inputClasses: 'inputError',
                inputErrorClasses: ''
            });
            setErrorMessage(err.response.data.error);
        });
    }

    return (
        <div className="App">
            <h1>GanderSum</h1>
            <form id="form-container">
                <input
                    placeholder='Number 1'
                    type='number'
                    value={num1}
                    name='num1'
                    className={classes.inputClasses}
                    onChange={updateValue}
                    id='n1'
                />
                <p className={classes.inputErrorClasses}>{errorMessage}</p>
                <input
                    placeholder='Number 2'
                    type='number'
                    value={num2}
                    name='num2'
                    className={classes.inputClasses}
                    onChange={updateValue}
                    id='n2'
                />
                <p className={classes.inputErrorClasses}>{errorMessage}</p>
                <button
                    onClick={handleSubmit}
                >Add These Numbers!</button>
            </form>
            <h2 
                id='answer'
                className={classes.answerClasses}
            >The answer is: {answer}</h2>
        </div>
    );
}

export default App;
