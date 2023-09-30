import {AppActionTypes} from "../redux-store";
import {Dispatch} from "redux";
import {authApi} from "../../../API/api";


export type AuthStateType = {
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}

const initialAuthState: AuthStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialAuthState, action: AppActionTypes): AuthStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.userData,
                isAuth: true
            }
        default:
            return state
    }
}

export type AuthReducerActionType = ReturnType<typeof setUserData>

export const setUserData = (userData: {id: null | number
    email: null | string
    login: null | string}) => ({
    type: 'SET-USER-DATA',
    userData
} as const)

//thunk

export const authUserTC = () => async (dispatch: Dispatch<AppActionTypes>) => {
    try {
        const res = await authApi.authUser()
        dispatch(setUserData(res.data))
    } catch (e: any) {
        dispatch(setUserData({id: null, email: null, login: null}))
        console.log(e.message)
    } finally {
    }
}
