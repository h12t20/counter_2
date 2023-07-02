import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './App.module.css';
import {Counter} from "../Counter/Counter";
import {Set} from "../Set/Set";
import {Logo} from '../Logo/Logo'
import {BrowserRouter, Route, Routes} from "react-router-dom";

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

    useEffect(() => localStorage.setItem('counterMinValue', minValue.toString()), [minValue])
    useEffect(() => localStorage.setItem('counterMaxValue', maxValue.toString()), [maxValue])
    useEffect(() => {
        localStorage.setItem('counterValue', value.toString())
        if (storageMaxValueAsString && value === +storageMaxValueAsString) {
            setError(value.toString())
        }
    }, [value, storageMaxValueAsString])
    useEffect(() => { // вычисление ошибок и их сохранение в локальный стейт
        if (inputMinTitle >= inputMaxTitle || (inputMinTitle < 0 && inputMaxTitle < 1)) {
            setError('Er1')
        } else if (inputMinTitle < 0)
            setError('Er2')
        else if (value >= maxValue) {
            setError(value.toString())
        } else setError('')
    }, [inputMinTitle, inputMaxTitle, value, error, maxValue]);
    useEffect(() => localStorage.setItem('errorStatus', error ? error.toString() : ''), [error])
    // отслеживание изменения ошибок и сохранение их в local storage
    const inputMinChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputMinTitle(+e.currentTarget.value)
    }
    const inputMaxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputMaxTitle(+e.currentTarget.value);
    }
    const setHandler = () => { //обрабочик кнопки set
        setMinValue(inputMinTitle)
        setMaxValue(inputMaxTitle)
        setValue(inputMinTitle);
    }
    const incHandler = () => { //обрабочик кнопки inc
        setValue(value + 1);
    }
    const resetHandler = () => { //обрабочик кнопки reset
        localStorage.removeItem('counterValue')
        setValue(storageMinValueAsString ? +storageMinValueAsString : 0)
        setInputMinTitle(storageMinValueAsString ? +storageMinValueAsString : 0)
        setInputMaxTitle((storageMaxValueAsString ? +storageMaxValueAsString : 10))
    }
    return (
        <div className={s.App}>
            <Logo/>
            <div className={s.body}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/counter_2'
                               element={<Counter error={error} incHandler={incHandler} resetHandler={resetHandler}
                                                 value={value}/>}/>
                        <Route path='/set_2'
                               element={<Set setHandler={setHandler} inputMinChangeHandler={inputMinChangeHandler}
                                             inputMaxChangeHandler={inputMaxChangeHandler}
                                             inputMinTitle={inputMinTitle}
                                             inputMaxTitle={inputMaxTitle} error={error}/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>

    );
}

export default App;
