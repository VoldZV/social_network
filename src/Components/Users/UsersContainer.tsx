import React from 'react';
import {UsersPageType, UserType} from "../redux/stateType";
import {AppStateType, DispatchActionType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {getUsersAC} from "../redux/reducers/UsersReducer";
import {connect} from "react-redux";
import {Users} from "./Users";

type TmstpUsers = {
    usersPage: UsersPageType
}

const mstpUsers = (state: AppStateType): TmstpUsers => ({
    usersPage: state.usersPage
})

type TmdtpUsers =  {
    getUsers: (users: UserType[]) => void
}

const mdtpUsers = (dispatch: Dispatch<DispatchActionType>): TmdtpUsers => ({
    getUsers: (users: UserType[]) => {
        dispatch(getUsersAC(users))
    }
})

export type Tusers = TmstpUsers & TmdtpUsers

export const UsersContainer = connect(mstpUsers, mdtpUsers)(Users)