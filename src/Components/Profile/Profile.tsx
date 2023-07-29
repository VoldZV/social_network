import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./Mysposts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.profile}>
            <div className={s.profileHeaderBG}></div>
            <ProfileInfo name={'Vladimir Zvyagin'} town={'Moscow'} avatar={"https://img.icons8.com/?size=512&id=65220&format=png"}/>
            <MyPosts/>
        </div>
    );
};

type ProfileInfoPT = {
    name: string
    town: string
    avatar: string
}

const ProfileInfo: React.FC<ProfileInfoPT> = ({name, town,avatar}) => {
    return (
        <div className={s.profileInfo}>
            <img src={avatar} alt=""/>
            <div className={s.description}>
                <div>{name}</div>
                <div>{town}</div>
            </div>
        </div>
    )
}
