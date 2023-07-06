import React from 'react';
import s from './Counter.module.css';
import {Button} from "../Button/Button";
import {NavLink} from "react-router-dom";

export type PropsType = {
    error: string
    incHandler: () => void
    resetHandler: () => void
    value: number
}

export function Counter(props: PropsType) {
    return (
        <div className={s.counter}>
            <div className={s.inputBlock}>
                <h1 className={!props.error ? s.value : s.error}>
                    {props.value}
                </h1>
            </div>
            <div className={s.buttonBlock}>
                <Button disable={!!props.error} callback={props.incHandler}
                        name='inc' className={s.button}></Button>
                <Button disable={false} callback={props.resetHandler} name='reset'
                        className={s.button}></Button>
                <NavLink to='/Counter_2/set'><Button disable={false} name='set'
                                           className={s.button}></Button></NavLink>
            </div>
        </div>
    );
}

