import {ProfilePageType, UserProfileType} from "../stateType";
import {DispatchActionType} from "../redux-store";

const initialState: ProfilePageType = {
    postsData: [],
    user: null,
    textariaPostValue: ''
}

export const ProfileReducer = (state = initialState, action: DispatchActionType): ProfilePageType => {
    switch (action.type) {
        case "SetUser":
            return {
                ...state,
                user: {...state.user, ...action.user}
            }
        case "ChangeTextAriaPostValue":
            return {
                ...state,
                textariaPostValue: action.newValue
            }
        case "ADD-POST":
            return {
                ...state,
                postsData: [...state.postsData, {
                    id: Math.floor(Math.random() * 100) + 100,
                    message: state.textariaPostValue,
                    likesCount: 0
                }],
                textariaPostValue: ""
            }
        default:
            return state
    }
};

// Reducer and ActionsType
export type ProfileReducerActionsType = ChangeTextAriaPostValueAT | AddPostAT | ReturnType<typeof setUserProfile>
type ChangeTextAriaPostValueAT = {
    type: "ChangeTextAriaPostValue"
    newValue: string
}
// type ChangeTextAriaPostValueAT = Action<"ChangeTextAriaPostValue"> & {newValue: string}
type AddPostAT = {
    type: "ADD-POST"
}
// type AddPostAT = Action<'ADD-POST'>

// Action creators
export const addPost = (): AddPostAT => ({type: "ADD-POST"})
export const changeTextariaValue = (newValue: string): ChangeTextAriaPostValueAT => ({
    type: "ChangeTextAriaPostValue",
    newValue
})
export const setUserProfile = (user: UserProfileType) => {
    return {
        type: "SetUser", user
    } as const }

export default ProfileReducer;