import React, {ChangeEvent} from 'react';
import s from './Set.module.css'
import {Button} from "./Button";
import {Input} from "./Input";

export type SetPropsType = {
    inputMinTitle: number;
    inputMaxTitle: number;
    inputMinChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    inputMaxChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    setHandler: () => void
    error: string
    onClickHandler: () => void
    disable: boolean
    onMouseOut: () => void
}

export function Set(props: SetPropsType) {
    return (
        <div className={s.set} onMouseOver={props.onClickHandler}
             onMouseOut={props.onMouseOut}>
            <div className={s.blockInputs} >
                <div className={s.input1}>
                    <Input title={props.inputMinTitle} name='start value'
                           className={props.error === 'Err1' || props.error === 'Err3' ?
                               s.error : s.input} callback={props.inputMinChangeHandler}
                           />
                </div>
                <div className={s.input2}>
                    <Input title={props.inputMaxTitle} name='max value'
                           className={props.error === 'Err2' || props.error === 'Err3' ?
                               s.error : s.input} callback={props.inputMaxChangeHandler}
                           />
                </div>
            </div>
            <div className={s.buttonBlock}>
                <Button disable={(!!props.error && props.error !== 'Enter values and press Set') || props.disable}
                        callback={props.setHandler} name='set' className={s.button}></Button>
            </div>
        </div>
    );
}

