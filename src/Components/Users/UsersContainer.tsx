import React from 'react';
import {UserType} from "../redux/stateType";
import {AppStateType} from "../redux/redux-store";
import {getUsersTC, toggleFollowTC} from "../redux/reducers/UsersReducer";
import {connect} from "react-redux";
import {UsersClassComponent} from "./UsersClassComponent";

type TmstpUsers = {
    users: UserType[]
    currentPage: number
    followingInProgressUsers: number[]
    totalCount: number
    pageSize: number
    isLoading: boolean
}

const mstpUsers = (state: AppStateType): TmstpUsers => ({
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    followingInProgressUsers: state.usersPage.followingInProgressUsers,
    totalCount: state.usersPage.totalCount,
    pageSize: state.usersPage.pageSize,
    isLoading: state.usersPage.isLoading
})

type TmdtpUsers =  {
    getUsersTC: (currentPage: number) => void
    toggleFollowTC: (userId: number, followed: boolean) => void
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
    getUsersTC,
    toggleFollowTC,
}

export type Tusers = TmstpUsers & TmdtpUsers

export const UsersContainer = connect(mstpUsers, mdtpUsers)(UsersClassComponent)