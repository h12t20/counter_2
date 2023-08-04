import React from 'react';
import s from './App.module.css';
import {Logo} from '../logo/Logo';
import {Counter} from "../counter/Counter";
import {Set} from "../set/Set";
import {useSelector} from "react-redux";
import {StateType} from "../redux/reducer";

function App() {
    document.title='Counter';
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
