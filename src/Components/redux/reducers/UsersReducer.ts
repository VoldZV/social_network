import {UsersPageType, UserType} from "../stateType";
import {DispatchActionType} from "../redux-store";

const initialState: UsersPageType = {
    users: [],
    error: null,
    totalCount: 0
}

export const UsersReducer = (state: UsersPageType = initialState , action: DispatchActionType): UsersPageType => {
    switch(action.type) {
        case "GET-USERS":
            return {
                ...state,
                users: action.users
            }
        default:
            return state
    }
};

// Reducer and Actions Types
export type UsersReducerActionsType = GetUsersActionType
type GetUsersActionType = {
    type: "GET-USERS",
    users: UserType[]
}

// Action creators
export const getUsersAC = (users: UserType[]): GetUsersActionType => ({
    type: "GET-USERS",
    users
})