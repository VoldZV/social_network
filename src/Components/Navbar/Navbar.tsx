import React from 'react';
import s from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={s.navbar}>
            <img src="https://img.icons8.com/?size=512&id=65220&format=png" alt=""/>
            <a href="#">Profile</a>
            <a href="#">Messages</a>
            <a href="#">News</a>
            <a href="#">Music</a>
        </div>
    );
};
