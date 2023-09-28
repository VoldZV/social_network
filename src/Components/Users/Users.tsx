import React from 'react';
import {UserType} from "../redux/stateType";
import {NavLink} from "react-router-dom";
import {usersApi} from "../../API/api";

type UsersPropsType = {
    users: UserType[]
    currentPage: number
    step: number
    countOfUserPages: number
    startLinkNumber: number
    endLinkNumber: number
    changeCurrentPage: (currentPage: number) => void
    toggleFollow: (userId: number) => void
    followingInProgressUsers: number[]
    addFollowingInProgressUser: (userId: number) => void
    removeFollowingInProgressUser: (userId: number) => void
}

export const Users: React.FC<UsersPropsType> = ({
                                                    users,
                                                    startLinkNumber,
                                                    step,
                                                    endLinkNumber,
                                                    countOfUserPages,
                                                    changeCurrentPage,
                                                    toggleFollow,
                                                    currentPage,
                                                    followingInProgressUsers,
                                                    addFollowingInProgressUser,
                                                    removeFollowingInProgressUser
                                                }) => {

    const linkToRender = new Array(step).fill(1).map((_, i) => (
        <span key={i} onClick={() => changeCurrentPage(startLinkNumber + i)}
              style={{fontWeight: currentPage === (startLinkNumber + i) ? 'bold' : 'normal'}}
        >
                 {'-' + (startLinkNumber + i)}
            </span>
    ))
    const changePagesListUp = () => {
        const newPageNumber = endLinkNumber + 1
        if (newPageNumber <= countOfUserPages) {
            changeCurrentPage(newPageNumber)
        }
    }
    const changePagesListDown = () => {
        const newPageNumber = startLinkNumber - 1
        if (newPageNumber > 0) {
            changeCurrentPage(newPageNumber)
        }
    }


    return (
        <div>
            <div>
                <button onClick={changePagesListDown}>list down</button>
                {linkToRender}
                <button onClick={changePagesListUp}>list up</button>
                <div>startLinkNumber {startLinkNumber}</div>
                <div>Count of users {countOfUserPages}</div>
                <div>Current page {currentPage}</div>
            </div>
            {users.map(user => {
                    const fetchToChangeFollowed = () => {
                        addFollowingInProgressUser(user.id)
                        if (!user.followed) {
                            usersApi.followUser(user.id)
                                .then((res) => {
                                    if (res.resultCode === 0) toggleFollow(user.id)
                                })
                                .catch((err) => console.log(err))
                                .finally(() => {
                                    removeFollowingInProgressUser(user.id)
                                })
                        } else {
                            usersApi.unFollowUser(user.id)
                                .then((res) => {
                                    if (res.resultCode === 0) toggleFollow(user.id)
                                })
                                .catch((err) => console.log(err))
                                .finally(() => {
                                    removeFollowingInProgressUser(user.id)
                                })
                        }
                    }
                    const buttonDisabled = followingInProgressUsers.some(id => id === user.id)

                    return <div key={user.id}>
                        <NavLink to={`/profile/${user.id}`}>
                            <img style={{width: "40px", height: "40px"}}
                                 src={user.photos.large || user.photos.small || "https://cdn.icon-icons.com/icons2/1993/PNG/512/account_avatar_face_man_people_profile_user_icon_123197.png"}
                                 alt="PHOTO"/>
                        </NavLink>
                        {user.name} c ID {user.id}
                        <button onClick={fetchToChangeFollowed}
                        disabled={buttonDisabled}
                        >{user.followed ? "unfollow" : "follow"}
                        </button>
                    </div>
                }
            )
            }
        </div>

    );
};