import React, {ChangeEvent, memo} from "react";
import s from './Input.module.css'

export type InputPropsType = {
    name: string
    className: string
    title: number
    callback: (e: ChangeEvent<HTMLInputElement>) => void
}
export const Input = memo((props: InputPropsType) => {
    return (
        <label className={s.label}>{props.name}: <input value={props.title}
                                                        name={props.name} className={props.className}
                                                        type='number' onChange={props.callback}/></label>
    );
})