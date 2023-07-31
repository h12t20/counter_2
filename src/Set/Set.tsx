import React, {ChangeEvent} from 'react';
import s from './Set.module.css'
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {maxTitleChangeAC, minTitleChangeAC, setHandlerAC, StateType} from "../Redux/reducer";

export const Set=()=>{
    const inputMinTitle = useSelector<StateType, number>(state =>
        state.inputMinTitle);
    const inputMaxTitle = useSelector<StateType, number>(state =>
        state.inputMaxTitle);
    const error = useSelector<StateType, string>(state =>
        state.error);
    const dispatch = useDispatch();
    return (
        <div className={s.set}>
            <div className={s.blockInputs}>
                <div className={s.input1}>
                    <Input title={inputMaxTitle} name='max value'
                           className={error === 'Err1' ?
                               s.error : s.input} callback={(e: ChangeEvent<HTMLInputElement>) =>
                        dispatch(maxTitleChangeAC(e.currentTarget.value))}/>
                </div>
                <div className={s.input2}>
                    <Input title={inputMinTitle} name='start value'
                           className={error.slice(0, 2) === 'Er' ?
                               s.error : s.input} callback={(e: ChangeEvent<HTMLInputElement>) =>
                        dispatch(minTitleChangeAC(e.currentTarget.value))}/>
                </div>
            </div>
            <div className={s.buttonBlock}>
                <Button disable={error[0] === 'E'}
                        callback={() => {dispatch(setHandlerAC())}}
                        name='set'
                        className={s.button}></Button>
            </div>
        </div>
    );
}

