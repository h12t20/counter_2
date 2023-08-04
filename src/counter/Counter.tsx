import React, {useCallback} from 'react';
import s from './Counter.module.css';
import {Button} from "../button/Button";
import {useDispatch, useSelector} from "react-redux";
import {displaySetAC, incHandlerAC, resetAC, StateType} from "../redux/reducer";

export const Counter=()=>{
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
                <Button disable={!!error} callback={useCallback(() =>
                    dispatch(incHandlerAC()),[dispatch])}
                        name='inc' className={s.button}></Button>
                <Button disable={false} callback={useCallback(() =>
                    dispatch(resetAC()),[dispatch])} name='reset'
                        className={s.button}></Button>
                <Button disable={false} name='set' callback={useCallback(() =>
                    dispatch(displaySetAC()),[dispatch])}
                        className={s.button}></Button>
            </div>
        </div>
    );
}

