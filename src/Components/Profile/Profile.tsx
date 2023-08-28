import React from 'react';
import s from './Profile.module.css'
import {reduxStore} from "../redux/redux-store";
import {MyPostsContainer} from "./Mysposts/MyPostsContainer";

type ProfilePT = {

}

export const Profile: React.FC<ProfilePT> = (props) => {
    return (
        <div className={s.profile}>
            <div className={s.profileHeaderBG}></div>
            <ProfileInfo name={'Vladimir Zvyagin'} town={'Moscow'} avatar={"https://img.icons8.com/?size=512&id=65220&format=png"}/>
            <MyPostsContainer store={reduxStore}/>
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
            <img src={avatar} alt="ava"/>
            <div className={s.description}>
                <div>{name}</div>
                <div>{town}</div>
            </div>
        </div>
    )
}
