import React from 'react';
import {UserType} from "../redux/stateType";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    users: UserType[]
    currentPage: number
    step: number
    countOfUserPages: number
    startLinkNumber: number
    endLinkNumber: number
    changeCurrentPage: (currentPage: number) => void
    toggleFollow: (userId: number, followed: boolean) => void
    followingInProgressUsers: number[]
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
                                                }) => {
    const linksToRender = new Array(step).fill(1).map((_, i) => (
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

    const usersForRender = users.map(user => {
            const fetchToChangeFollowed = () => {
                toggleFollow(user.id, user.followed)
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


    return (
        <div>
            <div>
                <button onClick={changePagesListDown}>list down</button>
                {linksToRender}
                <button onClick={changePagesListUp}>list up</button>
                <div>startLinkNumber {startLinkNumber}</div>
                <div>Count of users {countOfUserPages}</div>
                <div>Current page {currentPage}</div>
            </div>
            {usersForRender}
        </div>

    );
};