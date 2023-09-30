import {UsersPageType, UserType} from "../stateType";
import {AppActionTypes} from "../redux-store";
import {usersApi} from "../../../API/api";
import {Dispatch} from "redux";

const initialState: UsersPageType = {
    users: [],
    error: null,
    currentPage: 1,
    pageSize: 5,
    totalCount: 0,
    isLoading: false,
    followingInProgressUsers: []
}

export const UsersReducer = (state: UsersPageType = initialState, action: AppActionTypes): UsersPageType => {
    switch (action.type) {
        case "removeFollowingInProgressUser":
            return {
                ...state,
                followingInProgressUsers: state.followingInProgressUsers.filter(id => id !== action.userId)
            }
        case "addFollowingInProgressUser":
            return {
                ...state,
                followingInProgressUsers: [...state.followingInProgressUsers, action.userId]
            }
        case "SET-CURRENT-PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "SET-TOTAL-COUNT":
            return {
                ...state,
                totalCount: action.totalCount
            }
        case "GET-USERS":
            return {
                ...state,
                users: action.users
            }
        case "TOGGLE-FOLLOWED-USER":
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? {...user, followed: !user.followed} : user)
            }
        case "TOGGLE-ISLOADING":
            return {
                ...state,
                isLoading: !state.isLoading
            }
        default:
            return state
    }
};

// Reducer and Actions Types
export type UsersReducerActionsType = SetUsersActionType |
    toggleFollowActionType |
    ReturnType<typeof setTotalCount> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof toggleIsLoading> |
    ReturnType<typeof addFollowingInProgressUser> |
    ReturnType<typeof removeFollowingInProgressUser>

type SetUsersActionType = {
    type: "GET-USERS",
    users: UserType[]
}
type toggleFollowActionType = {
    type: "TOGGLE-FOLLOWED-USER",
    userId: number
}

// Action creators
export const setUsers = (users: UserType[]): SetUsersActionType => ({
    type: "GET-USERS",
    users
})
export const toggleFollow = (userId: number): toggleFollowActionType => ({
    type: "TOGGLE-FOLLOWED-USER",
    userId
})
export const setTotalCount = (totalCount: number) => ({
    type: "SET-TOTAL-COUNT",
    totalCount
} as const)
export const setCurrentPage = (currentPage: number) => ({
    type: "SET-CURRENT-PAGE",
    currentPage
} as const)
export const toggleIsLoading = () => ({
    type: "TOGGLE-ISLOADING",
} as const)
export const addFollowingInProgressUser = (userId: number) => ({
    type: "addFollowingInProgressUser",
    userId
} as const)
export const removeFollowingInProgressUser = (userId: number) => ({
    type: "removeFollowingInProgressUser",
    userId
} as const)

// thunk

export const getUsersTC = (currentPage: number) => async (dispatch: Dispatch<AppActionTypes>) => {
    dispatch(toggleIsLoading())
    try {
        const res = await usersApi.getUsers(currentPage)
        dispatch(setTotalCount(res.totalCount))
        dispatch(setCurrentPage(currentPage))
        dispatch(setUsers(res.items))
    } catch (e: any) {
        console.log(e.message)
    } finally {
        dispatch(toggleIsLoading())
    }
}

export const toggleFollowTC = (userId: number, followed: boolean) => async (dispatch: Dispatch<AppActionTypes>) => {
    dispatch(addFollowingInProgressUser(userId))
    try {
        const res =  !followed ? await usersApi.followUser(userId) : await usersApi.unFollowUser(userId)
        if (res.resultCode === 0) dispatch(toggleFollow(userId))
    } catch (e: any) {
        console.log(e.message)
    } finally {
        dispatch(removeFollowingInProgressUser(userId))
    }
}

