import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './App.module.css';
import {Counter} from "../Counter/Counter";
import {Set} from "../Set/Set";
import {Logo} from '../Logo/Logo'

function App() {
    const storageMinValueAsString = localStorage.getItem('counterMinValue');
    const storageMinValue = storageMinValueAsString ? +storageMinValueAsString : 0;
    const storageMaxValueAsString = localStorage.getItem('counterMaxValue');
    const storageMaxValue = storageMaxValueAsString ? +storageMaxValueAsString : 10;
    const storageValueAsString = localStorage.getItem('counterValue');
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
    const INF_MESSAGE = 'Enter values and press Set'

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
        else if (inputMaxTitle < 1 || value > inputMaxTitle)
            setError('Err2')
        else if (value >= maxValue) {
            setError(value.toString())
        } else if (error !== INF_MESSAGE) {
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
        setError(error === INF_MESSAGE ? '' : error)
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
            setError(INF_MESSAGE)
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
            <Logo/>
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
