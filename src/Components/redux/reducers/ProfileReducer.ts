import {ProfilePageType, UserProfileType} from "../stateType";
import {AppActionTypes} from "../redux-store";
import {Dispatch} from "redux";
import {profileApi} from "../../../API/api";

const initialState: ProfilePageType = {
    postsData: [],
    user: null,
    textariaPostValue: ''
}

export const ProfileReducer = (state = initialState, action: AppActionTypes): ProfilePageType => {
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


// thunk
export const getUserProfileTC = (userId: number) => async (dispatch: Dispatch<AppActionTypes>) => {
    try {
        const res = await profileApi.getUserProfile(userId)
        dispatch(setUserProfile(res))
    } catch (e: any) {
        console.log(e.message)
    } finally {

    }
}



export default ProfileReducer;