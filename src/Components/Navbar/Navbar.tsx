import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {

    return (
        <div className={s.navbar}>
            {/*<img src="https://img.icons8.com/?size=512&id=65220&format=png" alt=""/>*/}
            <NavLink className={({isActive}) => isActive ? s.activeLink : undefined} to="/profile">Profile</NavLink>
            <NavLink className={({isActive}) => isActive ? s.activeLink : undefined} to="/messages">Messages</NavLink>
            <NavLink className={({isActive}) => isActive ? s.activeLink : undefined} to="/news">News</NavLink>
            <NavLink className={({isActive}) => isActive ? s.activeLink : undefined} to="/music">Music</NavLink>
        </div>
    );
};
