import React from 'react';
import s from './App.module.css';
import {Logo} from '../Logo/Logo';
import {Navigate, Route, Routes} from "react-router-dom";
import {PATH} from "../Counter/Counter";
import {SetContainer} from "../Set/SetContainer";
import {CounterContainer} from "../Counter/CounterContainer";

function App() {
    return (
        <div className={s.App}>
            <Logo/>
            <div className={s.body}>
                <Routes>
                    <Route path='/' element={<Navigate to={PATH.COUNTER}/>}/>
                    <Route path={PATH.COUNTER}
                           element={<CounterContainer/>}/>
                    <Route path={PATH.SET}
                           element={<SetContainer/>}/>
                </Routes>
            </div>
        </div>
    );
}
export default App;
