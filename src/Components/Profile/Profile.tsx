import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./Mysposts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.profile}>
            <div className={s.profileHeaderBG}></div>
            <div className={s.description}>
                <div>Vladimir Zvyagin</div>
                <div>From Moscow</div>
            </div>
            <MyPosts/>

        </div>
    );
};
