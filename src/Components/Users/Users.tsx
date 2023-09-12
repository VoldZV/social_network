import React, {useEffect} from 'react';
import {Tusers} from "./UsersContainer";
import {UserType} from "../redux/stateType";

const initialUsers: UserType[] = [{
    name: "Vasya",
    id: 1,
    photos: {
        small: null,
        large: null
    },
    status: null,
    followed: false
},{
        name: "Dima",
        id: 2,
        photos: {
            small: null,
            large: null
        },
        status: null,
        followed: true
    }]

export const Users: React.FC<Tusers> = ({usersPage, getUsers}) => {
    useEffect(() => {
        getUsers(initialUsers)
    }, [])

    return (
        <div>
            {usersPage.users.map(user => <div key={user.id}>{user.name}</div>)}
        </div>
    );
};