import React from 'react';
import {UsersPageType, UserType} from "../redux/stateType";
import {AppStateType, DispatchActionType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {setCurrentPageAC, setTotalCountAC, setUsersAC, toggleFollowAC} from "../redux/reducers/UsersReducer";
import {connect} from "react-redux";
import {UsersClassComponent} from "./UsersClassComponent";

type TmstpUsers = {
    usersPage: UsersPageType
}

const mstpUsers = (state: AppStateType): TmstpUsers => ({
    usersPage: state.usersPage //отрефакторить добавить отдельно users[] , totacount, pagesize
})

type TmdtpUsers =  {
    setUsers: (users: UserType[]) => void
    toggleFollow: (userId: number) => void
    setTotalCount: (totalCount: number) => void
    setCurrentPage: (totalCount: number) => void
}

const mdtpUsers = (dispatch: Dispatch<DispatchActionType>): TmdtpUsers => ({
    setUsers: (users: UserType[]) => {
        dispatch(setUsersAC(users))
    },
    toggleFollow: (userId: number) => {
        dispatch(toggleFollowAC(userId))
    },
    setTotalCount: (totalCount: number) => {
        dispatch(setTotalCountAC(totalCount))
    },
    setCurrentPage: (currentPage: number) => {
        dispatch(setCurrentPageAC(currentPage))
    },
})

export type Tusers = TmstpUsers & TmdtpUsers

export const UsersContainer = connect(mstpUsers, mdtpUsers)(UsersClassComponent)