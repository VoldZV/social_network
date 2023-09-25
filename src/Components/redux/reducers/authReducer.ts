import {DispatchActionType} from "../redux-store";


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

export const authReducer = (state = initialAuthState, action: DispatchActionType): AuthStateType => {
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