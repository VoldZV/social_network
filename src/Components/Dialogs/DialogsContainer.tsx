import React from 'react';
import {addMessageAC, changeMessageAddFormValueAC} from "../redux/reducers/DialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {DialogsPageType} from "../redux/stateType";
import {AppStateType, AppActionTypes} from "../redux/redux-store";
import {Dispatch} from "redux";

type TmstpDialogs = {
    dialogsPage: DialogsPageType
}

const mstpDialogs = (state: AppStateType) : TmstpDialogs => ({
    dialogsPage: state.dialogsPage
})

type TmdtpDialogs = {
    addMessage: () => void,
    changeAddFormValue: (newMessage: string) => void
}

const mdtpDialogs = (dispatch: Dispatch<AppActionTypes>) : TmdtpDialogs => ({
    addMessage: () => {
        dispatch(addMessageAC())
    },
    changeAddFormValue: (newMessage: string) => {
        dispatch(changeMessageAddFormValueAC(newMessage))
    }
})

export type Tdialogs = TmstpDialogs & TmdtpDialogs

export const DialogsContainer = connect(mstpDialogs, mdtpDialogs)(Dialogs)



// with React.createContext
// export const DialogsContainer = () => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {(store => {
//                     const dialogsPageState = store.getState().dialogsPage
//
//                     const addMessage = () => {
//                         if (dialogsPageState.addFormValue) store.dispatch(addMessageAC())
//                     }
//
//                     const changeAddFormValue = (newMessage: string) => {
//                         store.dispatch(changeMessageAddFormValueAC(newMessage))
//                     }
//
//                     return <Dialogs dialogsPage={dialogsPageState}
//                                     addMessage={addMessage}
//                                     changeAddFormValue={changeAddFormValue}
//                     />
//                 }
//             )}
//         </StoreContext.Consumer>
//     );
// };