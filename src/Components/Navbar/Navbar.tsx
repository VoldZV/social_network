import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {

    return (
        <div className={s.navbar}>
            <img src="https://img.icons8.com/?size=512&id=65220&format=png" alt=""/>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/messages">Messages</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/music">Music</NavLink>
        </div>
    );
};
