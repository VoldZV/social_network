import React from 'react';
import {UsersPageType, UserType} from "../redux/stateType";
import {AppStateType} from "../redux/redux-store";
import {
    addFollowingInProgressUser, removeFollowingInProgressUser,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleFollow,
    toggleIsLoading
} from "../redux/reducers/UsersReducer";
import {connect} from "react-redux";
import {UsersClassComponent} from "./UsersClassComponent";

type TmstpUsers = {
    usersPage: UsersPageType
    isLoading: boolean
}

const mstpUsers = (state: AppStateType): TmstpUsers => ({
    usersPage: state.usersPage, //отрефакторить добавить отдельно users[] , totacount, pagesize
    isLoading: state.usersPage.isLoading
})

type TmdtpUsers =  {
    setUsers: (users: UserType[]) => void
    toggleFollow: (userId: number) => void
    setTotalCount: (totalCount: number) => void
    setCurrentPage: (totalCount: number) => void
    toggleIsLoading: () => void
    addFollowingInProgressUser: (userId: number) => void
    removeFollowingInProgressUser: (userId: number) => void
}

// const mdtpUsers = (dispatch: Dispatch<DispatchActionType>): TmdtpUsers => ({
//     setUsers: (users: UserType[]) => {
//         dispatch(setUsers(users))
//     },
//     toggleFollow: (userId: number) => {
//         dispatch(toggleFollow(userId))
//     },
//     setTotalCount: (totalCount: number) => {
//         dispatch(setTotalCount(totalCount))
//     },
//     setCurrentPage: (currentPage: number) => {
//         dispatch(setCurrentPage(currentPage))
//     },
//     toggleIsLoading: () => {
//         dispatch(toggleIsLoading())
//     },
// })
const mdtpUsers: TmdtpUsers = {
    setUsers,
    toggleFollow,
    setTotalCount,
    setCurrentPage,
    toggleIsLoading,
    addFollowingInProgressUser,
    removeFollowingInProgressUser
}

export type Tusers = TmstpUsers & TmdtpUsers

export const UsersContainer = connect(mstpUsers, mdtpUsers)(UsersClassComponent)