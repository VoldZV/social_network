import React, {useEffect} from 'react';
import {Tusers} from "./UsersContainer";
import axios from "axios";

export const Users: React.FC<Tusers> = ({usersPage, setUsers,toggleFollow}) => {
    // пока в компоненте Users запрос
    useEffect(() => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(res => {
                setUsers(res.data.items)
            })

    }, [])

    return (
        <div>
            {usersPage.users.map(user => (
                <div key={user.id}>
                    <img style={{width: "40px", height: "40px"}} src={user.photos.large || user.photos.small || "https://cdn.icon-icons.com/icons2/1993/PNG/512/account_avatar_face_man_people_profile_user_icon_123197.png"} alt="PHOTO"/>
                    {user.name}
                    <button onClick={()=>toggleFollow(user.id)}>{user.followed ? "unfollow" : "follow"}</button>
                </div>))}
        </div>
    );
};