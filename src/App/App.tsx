import React, {ChangeEvent, useEffect, useReducer} from 'react';
import s from './App.module.css';
import {Counter} from "../Counter/Counter";
import {Set} from "../Set/Set";
import {Logo} from '../Logo/Logo';
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import {PATH} from "../Counter/Counter";
import {
    incHandlerAC,
    maxTitleChangeAC,
    minTitleChangeAC,
    reducer,
    resetAC,
    setHandlerAC,
    StateType
} from "../Redux/Reducer";

function App() {
    const storageMinValueAsString = localStorage.getItem('counterMinValue');
    const storageMinValue = storageMinValueAsString ? +storageMinValueAsString : 0;
    const storageMaxValueAsString = localStorage.getItem('counterMaxValue');
    const storageMaxValue = storageMaxValueAsString ? +storageMaxValueAsString : 10;
    const storageValueAsString = localStorage.getItem('counterValue');
    const initialState: StateType = {
        value: storageValueAsString && storageMinValueAsString ?
            Math.max(+storageValueAsString, +storageMinValueAsString) : storageValueAsString ?
                +storageValueAsString : storageMinValueAsString ? +storageMinValueAsString : 0,
        minValue: storageMinValue,
        maxValue: storageMaxValue,
        error: storageValueAsString && storageMaxValueAsString && (+storageValueAsString >=
            +storageMaxValueAsString) ? storageValueAsString : '',
        inputMinTitle: storageMinValue,
        inputMaxTitle: storageMaxValue
    }
    const [state, dispatchState] = useReducer(reducer, initialState)
    const navigate = useNavigate()

    useEffect(() => localStorage.setItem('counterMinValue', state.minValue.toString()), [state.minValue])
    useEffect(() => localStorage.setItem('counterMaxValue', state.maxValue.toString()), [state.maxValue])
    useEffect(() => localStorage.setItem('counterValue', state.value.toString()), [state.value])

    const inputMinChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatchState(minTitleChangeAC(e.currentTarget.value));
    }
    const inputMaxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatchState(maxTitleChangeAC(e.currentTarget.value));
    }
    const setHandler = () => {
        dispatchState(setHandlerAC());
        navigate(PATH.COUNTER)
    }
    const incHandler = () => {
        dispatchState(incHandlerAC());
    }
    const resetHandler = () => {
        localStorage.removeItem('counterValue') // удаление сохраненного значения счетчика
        dispatchState(resetAC());
    }
    return (
        <div className={s.App}>
            <Logo/>
            <div className={s.body}>
                <Routes>

                    <Route path='/' element={<Navigate to={PATH.COUNTER}/>}/>
                    <Route path={PATH.COUNTER}
                           element={<Counter error={state.error} incHandler={incHandler} resetHandler={resetHandler}
                                             value={state.value}/>}/>
                    <Route path={PATH.SET}
                           element={<Set setHandler={setHandler} inputMinChangeHandler={inputMinChangeHandler}
                                         inputMaxChangeHandler={inputMaxChangeHandler}
                                         inputMinTitle={state.inputMinTitle}
                                         inputMaxTitle={state.inputMaxTitle} error={state.error}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
