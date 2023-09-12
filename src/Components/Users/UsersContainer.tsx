import React from 'react';
import {UsersPageType, UserType} from "../redux/stateType";
import {AppStateType, DispatchActionType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {setUsersAC, toggleFollowAC} from "../redux/reducers/UsersReducer";
import {connect} from "react-redux";
import {Users} from "./Users";

type TmstpUsers = {
    usersPage: UsersPageType
}

const mstpUsers = (state: AppStateType): TmstpUsers => ({
    usersPage: state.usersPage
})

type TmdtpUsers =  {
    setUsers: (users: UserType[]) => void
    toggleFollow: (userId: number) => void
}

const mdtpUsers = (dispatch: Dispatch<DispatchActionType>): TmdtpUsers => ({
    setUsers: (users: UserType[]) => {
        dispatch(setUsersAC(users))
    },
    toggleFollow: (userId: number) => {
        dispatch(toggleFollowAC(userId))
    }
})

export type Tusers = TmstpUsers & TmdtpUsers

export const UsersContainer = connect(mstpUsers, mdtpUsers)(Users)