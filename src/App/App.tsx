import React, {ChangeEvent, useEffect} from 'react';
import s from './App.module.css';
import {Counter} from "../Counter/Counter";
import {Set} from "../Set/Set";
import {Logo} from '../Logo/Logo';
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import {PATH} from "../Counter/Counter";
import {store} from "../Redux/store";

import {
    incHandlerAC,
    maxTitleChangeAC,
    minTitleChangeAC,
    resetAC,
    setHandlerAC
} from "../Redux/reducer";

function App() {
    const navigate = useNavigate()
    let state=store.getState()

    useEffect(() => localStorage.setItem('counterMinValue', state.minValue.toString()), [state.minValue])
    useEffect(() => localStorage.setItem('counterMaxValue', state.maxValue.toString()), [state.maxValue])
    useEffect(() => localStorage.setItem('counterValue', state.value.toString()), [state.value])

    const inputMinChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        store.dispatch(minTitleChangeAC(e.currentTarget.value));
    }
    const inputMaxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        store.dispatch(maxTitleChangeAC(e.currentTarget.value));
    }
    const setHandler = () => {
        store.dispatch(setHandlerAC());
        navigate(PATH.COUNTER)
    }
    const incHandler = () => {
        store.dispatch(incHandlerAC());
    }
    const resetHandler = () => {
        localStorage.removeItem('counterValue')
        store.dispatch(resetAC());
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
