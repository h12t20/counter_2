import React from 'react';
import s from './Counter.module.css';
import {Button} from "../Button/Button";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {incHandlerAC, resetAC, StateType} from "../Redux/reducer";

export const PATH = {
    COUNTER: '/counter',
    SET: '/set'
} as const

export function Counter() {
    const navigate = useNavigate()
    const navigateSET = () => navigate(PATH.SET)
    const value = useSelector<StateType, number>(state =>
       state.value);
    const error = useSelector<StateType, string>(state =>
        state.error);
    const dispatch=useDispatch();

    return (
        <div className={s.counter}>
            <div className={s.inputBlock}>
                <h1 className={!error ? s.value : s.error}>
                    {value}
                </h1>
            </div>
            <div className={s.buttonBlock}>
                <Button disable={!!error} callback={() => dispatch(incHandlerAC())}
                        name='inc' className={s.button}></Button>
                <Button disable={false} callback={() => dispatch(resetAC())} name='reset'
                        className={s.button}></Button>
                <Button disable={false} name='set' callback={navigateSET}
                        className={s.button}></Button>
            </div>
        </div>
    );
}

