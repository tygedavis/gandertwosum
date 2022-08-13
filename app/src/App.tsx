import React from 'react';
import axios from 'axios';
import * as _ from 'lodash';
import './App.css';

function App() {
    const [num1, setNum1] = React.useState('');
    const [num2, setNum2] = React.useState('');
    const [answer, setAnswer] = React.useState(0);
    const [answerClasses, setAnswerClasses] = React.useState('hide');
    const [num1InputValues, setNum1Values] = React.useState({
        errorMessage: '',
        errorMessageClassName: 'hide',
        classNames: ''
    });
    const [num2InputValues, setNum2Values] = React.useState({
        errorMessage: '',
        errorMessageClassName: 'hide',
        classNames: ''
    });

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
            num1,
            num2,
        }).then((res) => {
            setAnswerClasses('');
            setNum1Values({
                errorMessage: '',
                errorMessageClassName: 'hide',
                classNames: ''
            });
            setNum2Values({
                errorMessage: '',
                errorMessageClassName: 'hide',
                classNames: ''
            });

            setAnswer(res.data.answer);
        }).catch((err) => {
            const errorMessages = err.response.data.error;
            console.log('errorMessages', errorMessages);
            if (errorMessages.num1Error) {
                setNum1Values({
                    ...num1InputValues,
                    errorMessage: errorMessages.num1Error,
                    classNames: 'inputError',
                    errorMessageClassName: ''
                })
            }
            if (errorMessages.num2Error) {
                setNum2Values({
                    ...num1InputValues,
                    errorMessage: errorMessages.num2Error,
                    classNames: 'inputError',
                    errorMessageClassName: ''
                })
            }
            if (errorMessages.genericError) {
                setNum1Values({
                    ...num1InputValues,
                    errorMessage: errorMessages.genericError,
                    classNames: 'inputError',
                    errorMessageClassName: ''
                })
                setNum2Values({
                    ...num1InputValues,
                    errorMessage: errorMessages.genericError,
                    classNames: 'inputError',
                    errorMessageClassName: ''
                })
            }
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
                    className={num1InputValues.classNames}
                    onChange={updateValue}
                    id='n1'
                />
                <p className={num1InputValues.errorMessageClassName}>{num1InputValues.errorMessage}</p>
                <input
                    placeholder='Number 2'
                    type='number'
                    value={num2}
                    name='num2'
                    className={num2InputValues.classNames}
                    onChange={updateValue}
                    id='n2'
                />
                <p className={num2InputValues.errorMessageClassName}>{num2InputValues.errorMessage}</p>
                <button
                    onClick={handleSubmit}
                >Add These Numbers!</button>
            </form>
            <h2 
                id='answer'
                className={answerClasses}
            >The answer is: {answer}</h2>
        </div>
    );
}

export default App;
