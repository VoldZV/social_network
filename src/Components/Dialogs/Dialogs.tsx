import React from 'react';
import s from './Diaolgs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem name={'Galina'} id={1}/>
                <DialogsItem name={'Alexander'} id={2}/>
                <DialogsItem name={'Nataliya'} id={3}/>
                <DialogsItem name={'Danil'} id={4}/>
                <DialogsItem name={'Pavel'} id={5}/>
                <DialogsItem name={'Ilya'} id={5}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hello'}/>
                <Message message={'What`up man?'}/>
                <Message message={'Yo?'}/>
            </div>
        </div>
    );
};

type DialogsItemPT = {
    id: number
    name: string
}

const DialogsItem: React.FC<DialogsItemPT> = ({id, name}) => {
    return (
        <div className={s.dialogsItem}>
            <img src="https://cdn.icon-icons.com/icons2/1993/PNG/512/account_avatar_face_man_people_profile_user_icon_123197.png" alt="avatar"/>
            <NavLink to={`${id}`}>{name}</NavLink>
        </div>
    )
}

type MessagePT = {
    message: string
}

const Message: React.FC<MessagePT> = ({message}) => {
    return (
        <div className={s.message}>{message}</div>
    )
}
