import React, {ChangeEvent} from 'react';
import s from './Set.module.css'
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import {NavLink} from "react-router-dom";

export type SetPropsType = {
    inputMinTitle: number;
    inputMaxTitle: number;
    inputMinChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    inputMaxChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    setHandler: () => void
    error: string
}

export function Set(props: SetPropsType) {
    return (
        <div className={s.set}>
            <div className={s.blockInputs}>
                <div className={s.input1}>
                    <Input title={props.inputMaxTitle} name='max value'
                           className={props.error === 'Err1' ?
                               s.error : s.input} callback={props.inputMaxChangeHandler}/>
                </div>
                <div className={s.input2}>
                    <Input title={props.inputMinTitle} name='start value'
                           className={props.error.slice(0,2) === 'Er'?
                               s.error : s.input} callback={props.inputMinChangeHandler}/>
                </div>
            </div>
            <div className={s.buttonBlock}>
                <NavLink to='/counter_2'><Button disable={props.error[0]==='E'}
                                           callback={props.setHandler} name='set'
                                           className={s.button}></Button></NavLink>
            </div>
        </div>
    );
}

