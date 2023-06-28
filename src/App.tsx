import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './App.module.css';
import {Counter} from "./Counter";
import {Set} from "./Set";

function App() {
    let storageMinValueAsString = localStorage.getItem('counterMinValue');
    let storageMinValue = storageMinValueAsString ? +storageMinValueAsString : 0;
    let storageMaxValueAsString = localStorage.getItem('counterMaxValue');
    let storageMaxValue = storageMaxValueAsString ? +storageMaxValueAsString : 10;
    let storageValueAsString = localStorage.getItem('counterValue');
    const [value, setValue] = useState(() => {
        return storageValueAsString && storageMinValueAsString ?
            Math.max(+storageValueAsString, +storageMinValueAsString) : storageValueAsString ?
                +storageValueAsString : storageMinValueAsString ? +storageMinValueAsString : 0
    });
    const [minValue, setMinValue] = useState(() => storageMinValue);
    const [maxValue, setMaxValue] = useState(() => storageMaxValue);
    const [error, setError] = useState('')
    const [inputMinTitle, setInputMinTitle] = useState(storageMinValue)
    const [inputMaxTitle, setInputMaxTitle] = useState(storageMaxValue)
    const [disable, setDisable] = useState(true)

    useEffect(() => localStorage.setItem('counterMinValue', minValue.toString()), [minValue])
    useEffect(() => localStorage.setItem('counterMaxValue', maxValue.toString()), [maxValue])
    useEffect(() => {
        localStorage.setItem('counterValue', value.toString())
        if (storageMaxValueAsString && value === +storageMaxValueAsString) {
            setError(value.toString())
        }
    }, [value, storageMaxValueAsString])
    useEffect(() => localStorage.setItem('errorStatus', error ? error.toString() : ''), [error])
    useEffect(() => {
        if (inputMinTitle >= inputMaxTitle || (inputMinTitle < 0 && inputMaxTitle < 1) ||
            (inputMinTitle < 0 && value > inputMaxTitle)) {
            setError('Err3')
        } else if (inputMinTitle < 0)
            setError('Err1')
        else if ((inputMaxTitle < 1) || (value > inputMaxTitle))
            setError('Err2')
        else if (value >= maxValue) {
            setError(value.toString())
        } else if (error !== 'Enter values and press Set') {
            setError('')
        }
    }, [inputMinTitle, inputMaxTitle, value, error, maxValue]);

    const inputMinChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputMinTitle(+e.currentTarget.value)
        if (+e.currentTarget.value !== minValue) setDisable(false)
    }
    const inputMaxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputMaxTitle(+e.currentTarget.value);
        if (+e.currentTarget.value !== maxValue) setDisable(false)
    }
    const setHandler = () => {
        setMinValue(inputMinTitle)
        setMaxValue(inputMaxTitle)
        setValue(value > inputMinTitle || value > inputMaxTitle ?
            Math.min(inputMinTitle, inputMaxTitle) : value);
        setDisable(true)
        setError(error === 'Enter values and press Set' ? '' : error)
    }
    const incHandler = () => {
        setValue(value + 1);
    }
    const resetHandler = () => {
        localStorage.removeItem('counterValue')
        setValue(storageMinValueAsString ? +storageMinValueAsString : 0)
        setInputMinTitle(storageMinValueAsString ? +storageMinValueAsString : 0)
        setInputMaxTitle((storageMaxValueAsString ? +storageMaxValueAsString : 10))
    }
    let timerID: NodeJS.Timer
    const onMouseOver = () => {
        if (error.slice(0, 2) !== 'Er') {
            setError('Enter values and press Set')
            clearTimeout(timerID)
        }
    }
    const onMouseOut = () => {
        if (error.slice(0, 2) !== 'Er') {
            timerID = setTimeout(() => setError(''), 150)
        }
    }
    return (
        <div className={s.App}>
            <div className={s.logoAndHeader}>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvZOFrRa-mSC68GR0LiQlqhRrZNLEcOGjPfw&usqp=CAU'
                    alt='logo' className={s.AppLogo}/>
                <h1 className={s.AppHeader}>Counter</h1>
            </div>
            <div className={s.body}>
                <Counter value={value} resetHandler={resetHandler} error={error} incHandler={incHandler}/>
                <Set setHandler={setHandler} inputMinChangeHandler={inputMinChangeHandler}
                     inputMaxChangeHandler={inputMaxChangeHandler} inputMinTitle={inputMinTitle}
                     inputMaxTitle={inputMaxTitle} error={error} onMouseOver={onMouseOver}
                     disable={disable} onMouseOut={onMouseOut}/>
            </div>
        </div>
    );
}

export default App;
