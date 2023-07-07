import React from "react";
import logo from './logo.jpeg'
import s from './Logo.module.css'
export const Logo = () => {
    return (
        <div className={s.logoAndHeader}>
            <img src={logo}
                 alt='logo' className={s.AppLogo}/>
            <h1 className={s.AppHeader}>Counter</h1>

        </div>
    )
}