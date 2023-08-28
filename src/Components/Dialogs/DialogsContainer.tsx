import React from 'react';
import {addMessageAC, changeMessageAddFormValueAC} from "../redux/reducers/DialogsReducer";
import {Dialogs} from "./Dialogs";
import {Tstore} from "../redux/redux-store";

type DialogsContainerPT = {
    store: Tstore
}

export const DialogsContainer: React.FC<DialogsContainerPT> = ({store,store:{dispatch}}) => {
    const dialogsPageState = store.getState().dialogsPage

    const addMessage = () => {
        if (dialogsPageState.addFormValue) dispatch(addMessageAC())
    }

    const changeAddFormValue = (newMessage: string) => {
        dispatch(changeMessageAddFormValueAC(newMessage))
    }

    return (
        <Dialogs dialogsPage={dialogsPageState}
                 addMessage={addMessage}
                 changeAddFormValue={changeAddFormValue}
        />
    );
};


