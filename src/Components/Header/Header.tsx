import React from 'react';
import logo from "./resources/logo.png";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";


type HeaderPT = {
    isAuth: boolean
    loginName: string | null
}

export const Header: React.FC<HeaderPT> = ({isAuth, loginName}) => {


    return (
        <header className={s.header}>
            <div className={s.headerLogo}><img src={logo} alt="logo"/></div>
            <div className={s.headerCenter}>Header Center</div>
            <div className={s.headerLogin}>
                {isAuth ?
                    <span>{loginName}</span>
                    :
                    <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
};
