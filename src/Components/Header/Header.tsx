import React from 'react';
import logo from "./resources/logo.png";
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.headerLogo}><img src={logo} alt="logo"/></div>
            <div className={s.headerCenter}>Header Center</div>
            <div className={s.headerLogin}>Header Login</div>
        </header>
    );
};
