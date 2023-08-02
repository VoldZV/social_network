import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./Mysposts/MyPosts";
import {ProfilePageType} from "../redux/stateType";

type ProfilePT = {
    profilePage: ProfilePageType
    addPost: (postValue: string) => void
    changeTextariaValue: (newPostValue: string) => void
}

export const Profile: React.FC<ProfilePT> = ({profilePage, addPost, changeTextariaValue}) => {
    return (
        <div className={s.profile}>
            <div className={s.profileHeaderBG}></div>
            <ProfileInfo name={'Vladimir Zvyagin'} town={'Moscow'} avatar={"https://img.icons8.com/?size=512&id=65220&format=png"}/>
            <MyPosts postsData={profilePage.postsData}
                     addPost={addPost}
                     textariaPostValue = {profilePage.textariaPostValue}
                     changeTextariaValue = {changeTextariaValue}
            />
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
