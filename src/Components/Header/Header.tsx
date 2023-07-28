import React from 'react';
import logo from "./resources/logo.png";
import s from './Header.module.css'

export const Header = () => {
    return (
        <div className={s.header}>
            <img src={logo} alt="logo"/>

        </div>
    );
};
