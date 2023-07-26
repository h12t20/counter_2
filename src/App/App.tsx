import React from 'react';
import s from './App.module.css';
import {Logo} from '../Logo/Logo';
import {Navigate, Route, Routes} from "react-router-dom";
import {Counter, PATH} from "../Counter/Counter";
import {Set} from "../Set/Set";

function App() {
    return (
        <div className={s.App}>
            <Logo/>
            <div className={s.body}>
                <Routes>
                    <Route path='/' element={<Navigate to={PATH.COUNTER}/>}/>
                    <Route path={PATH.COUNTER}
                           element={<Counter/>}/>
                    <Route path={PATH.SET}
                           element={<Set/>}/>
                </Routes>
            </div>
        </div>
    );
}
export default App;
