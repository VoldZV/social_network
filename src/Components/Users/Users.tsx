import React from 'react';
import {UserType} from "../redux/stateType";

type UsersPropsType = {
    users: UserType[]
    currentPage: number
    step: number
    countOfUserPages: number
    startLinkNumber: number
    endLinkNumber: number
    changeCurrentPage: (currentPage:number) => void
    toggleFollow: (userId: number) => void
}

export const Users: React.FC<UsersPropsType> = ({users,startLinkNumber,step,endLinkNumber,countOfUserPages,changeCurrentPage, toggleFollow , currentPage}) => {

    const linkToRender = new Array(step).fill(1).map((_, i) => (
        <span key={i} onClick={()=>changeCurrentPage(startLinkNumber + i)}
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
            {users.map(user => (
                <div key={user.id}>
                    <img style={{width: "40px", height: "40px"}} src={user.photos.large || user.photos.small || "https://cdn.icon-icons.com/icons2/1993/PNG/512/account_avatar_face_man_people_profile_user_icon_123197.png"} alt="PHOTO"/>
                    {user.name}
                    <button onClick={()=>toggleFollow(user.id)}>{user.followed ? "unfollow" : "follow"}</button>
                </div>))}
        </div>

    );
};