import React from "react";
type ButtonPropsType = {
    name: string
    callback: () => void
    className: string
    disable:boolean
}
export const Button = (props: ButtonPropsType) => {
    return (
            <button disabled={props.disable} className={props.className} onClick={props.callback}>{props.name}</button>
    );
}