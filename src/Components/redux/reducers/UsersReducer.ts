import {UsersPageType, UserType} from "../stateType";
import {DispatchActionType} from "../redux-store";

const initialState: UsersPageType = {
    users: [],
    error: null,
    currentPage: 1,
    pageSize: 5,
    totalCount: 0
}

export const UsersReducer = (state: UsersPageType = initialState, action: DispatchActionType): UsersPageType => {
    switch (action.type) {
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
        default:
            return state
    }
};

// Reducer and Actions Types
export type UsersReducerActionsType = SetUsersActionType | toggleFollowActionType | ReturnType<typeof setTotalCountAC>| ReturnType<typeof setCurrentPageAC>
type SetUsersActionType = {
    type: "GET-USERS",
    users: UserType[]
}
type toggleFollowActionType = {
    type: "TOGGLE-FOLLOWED-USER",
    userId: number
}

// Action creators
export const setUsersAC = (users: UserType[]): SetUsersActionType => ({
    type: "GET-USERS",
    users
})
export const toggleFollowAC = (userId: number): toggleFollowActionType => ({
    type: "TOGGLE-FOLLOWED-USER",
    userId
})
export const setTotalCountAC = (totalCount: number) => ({
    type: "SET-TOTAL-COUNT",
    totalCount
} as const)
export const setCurrentPageAC = (currentPage: number) => ({
    type: "SET-CURRENT-PAGE",
    currentPage
} as const)