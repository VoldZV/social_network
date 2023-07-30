import React from 'react';
import s from './Diaolgs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {

    const dialogsUsers = [
        {id: 1, name: 'Galina'},
        {id: 2, name: 'Alexander'},
        {id: 3, name: 'Nataliya'},
        {id: 4, name: 'Danil'},
        {id: 5, name: 'Pavel'},
        {id: 6, name: 'Ilya'},
    ]
    const dialogsItems = dialogsUsers.map((user) => <DialogsItem key={user.id + user.name} name={user.name} id={user.id}/>)

    const messageItems = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'What`up man'},
        {id: 3, message: 'Yo'}
    ]
    const messages = messageItems.map(item => <Message key={item.id} message={item.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={s.messages}>
                {messages}
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
