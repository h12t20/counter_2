import React from 'react';
import s from './App.module.css';
import {Logo} from '../Logo/Logo';
import {Counter} from "../Counter/Counter";
import {Set} from "../Set/Set";
import {useSelector} from "react-redux";
import {StateType} from "../Redux/reducer";

function App() {
    const displaySet = useSelector<StateType, boolean>(state =>
        state.displaySet);
    return (
        <div className={s.App}>
            <Logo/>
            <div className={s.body}>
                {displaySet? <Set/>: <Counter/>}
            </div>
        </div>
    );
}
export default App;
