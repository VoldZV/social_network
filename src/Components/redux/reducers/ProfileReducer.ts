import {ProfilePageType} from "../stateType";
import {DispatchActionType} from "../store";

export const ProfileReducer = (state: ProfilePageType, action: DispatchActionType): ProfilePageType => {
    switch (action.type) {
        case "ChangeTextAriaPostValue":
            return {
                ...state,
                textariaPostValue: action.newValue
            }
        case "ADD-POST":
            return {
                ...state,
                postsData: [...state.postsData, {id: Math.floor(Math.random()*100) + 100, message: state.textariaPostValue, likesCount: 0}],
                textariaPostValue: ""
            }
        default:
            return state
    }
};





// Reducer and ActionsType
export type ProfileReducerActionsType = ChangeTextAriaPostValueAT | AddPostAT
type ChangeTextAriaPostValueAT = {
    type: "ChangeTextAriaPostValue"
    newValue: string
}
type AddPostAT = {
    type: "ADD-POST"
}

// Action creators
export const addPostAC = ():AddPostAT  => ({type: "ADD-POST"})
export const changeTextariaValueAC = (newValue: string):ChangeTextAriaPostValueAT  => ({type: "ChangeTextAriaPostValue", newValue})

export default ProfileReducer;