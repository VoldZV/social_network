import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Diaolgs.module.css'
import {NavLink} from "react-router-dom";
import {DialogsPageType} from "../redux/stateType";
import {ActionsType, addMessageAC, changeMessageAddFormValueAC} from "../redux/store";

type DialogsPT = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsType) => void
}

export const Dialogs: React.FC<DialogsPT> = ({
                                                 dispatch,
                                                 dialogsPage: {dialogsUsersData, messageItemsData, addFormValue}
                                             }) => {

    const dialogsItems = dialogsUsersData.map((user) => <DialogsItem key={user.id + user.name} name={user.name}
                                                                     id={user.id}/>)
    const messages = messageItemsData.map(item => <Message key={item.id} message={item.message}/>)

    const addMessageHandler = () => {
        if (addFormValue) dispatch(addMessageAC())
    }

    const onChangeAddFormValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newMessage = e.currentTarget.value
        dispatch(changeMessageAddFormValueAC(newMessage))
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && e.ctrlKey) addMessageHandler()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={s.messages}>
                {messages}
            </div>
            <div className={s.createMessage}>
                <span>Введите текст</span>
                <textarea name="" id="" cols={20} rows={3}
                          onChange={onChangeAddFormValue}
                          onKeyDown={onKeyDownHandler}
                          value={addFormValue}
                ></textarea>
                <button onClick={addMessageHandler}>Отправить</button>
            </div>
        </div>
    );
};

export type DialogsItemPT = {
    id: number
    name: string
}

const DialogsItem: React.FC<DialogsItemPT> = ({id, name}) => {
    return (
        <div className={s.dialogsItem}>
            <img
                src="https://cdn.icon-icons.com/icons2/1993/PNG/512/account_avatar_face_man_people_profile_user_icon_123197.png"
                alt="avatar"/>
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
