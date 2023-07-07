import React from 'react';
import s from './Counter.module.css';
import {Button} from "../Button/Button";
import {useNavigate} from "react-router-dom";
export const PATH = {
    COUNTER: '/counter',
    SET: '/set'
} as const

export type PropsType = {
    error: string
    incHandler: () => void
    resetHandler: () => void
    value: number
}

export function Counter(props: PropsType) {
    const navigate=useNavigate()
    const navigateSET=()=>navigate(PATH.SET)
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
                <Button disable={false} name='set' callback={navigateSET}
                                           className={s.button}></Button>
            </div>
        </div>
    );
}

