import React from 'react';
import {addMessageAC, changeMessageAddFormValueAC} from "../redux/reducers/DialogsReducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../redux/context/context";


export const DialogsContainer = () => {


    return (
        <StoreContext.Consumer>
            {(store => {
                    const dialogsPageState = store.getState().dialogsPage

                    const addMessage = () => {
                        if (dialogsPageState.addFormValue) store.dispatch(addMessageAC())
                    }

                    const changeAddFormValue = (newMessage: string) => {
                        store.dispatch(changeMessageAddFormValueAC(newMessage))
                    }

                    return <Dialogs dialogsPage={dialogsPageState}
                                    addMessage={addMessage}
                                    changeAddFormValue={changeAddFormValue}
                    />
                }
            )}
        </StoreContext.Consumer>
    );
};


