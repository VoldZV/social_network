import {DialogsPageType} from "../stateType";
import {store} from "../store";
import {DispatchActionType} from "../redux-store";

export const DialogsReducer = (state: DialogsPageType = store._state.dialogsPage, action: DispatchActionType): DialogsPageType => {
    switch (action.type) {
        case "ChangeMessageAddFormValue":
            return {
                ...state,
                addFormValue: action.newValue,
            }
        case "ADD-MESSAGE":
            return {
                ...state,
                messageItemsData: [...state.messageItemsData, {id: Math.floor(Math.random()*100) + 100, message: state.addFormValue}],
                addFormValue: ""
            }
        default:
            return state
    }
};


// Reducer and Actions Types
export type DialogsReducerActionsType = changeMessageAddFormValueAT | addMessageAT
type changeMessageAddFormValueAT = {
    type: "ChangeMessageAddFormValue"
    newValue: string
}
type addMessageAT = {
    type: "ADD-MESSAGE"
}


// Action creators
export const addMessageAC = (): addMessageAT => ({type: "ADD-MESSAGE"})
export const changeMessageAddFormValueAC = (newValue: string): changeMessageAddFormValueAT => ({
    type: "ChangeMessageAddFormValue",
    newValue
})

export default DialogsReducer;