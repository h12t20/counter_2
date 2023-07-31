import React from 'react';
import s from './Counter.module.css';
import {Button} from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {displaySetAC, incHandlerAC, resetAC, StateType} from "../Redux/reducer";

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
                <Button disable={!!error} callback={() => dispatch(incHandlerAC())}
                        name='inc' className={s.button}></Button>
                <Button disable={false} callback={() => dispatch(resetAC())} name='reset'
                        className={s.button}></Button>
                <Button disable={false} name='set' callback={() => dispatch(displaySetAC())}
                        className={s.button}></Button>
            </div>
        </div>
    );
}

