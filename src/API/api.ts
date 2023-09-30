import axios, {AxiosInstance} from "axios";
import {UserProfileType, UserType} from "../Components/redux/stateType";


const instance: AxiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '9a4825e2-08d3-45d5-9581-2297f88ccdf2'
    }
})

// response types
type getUsersRDtype = {
    items: UserType[]
    totalCount: number
    error: string
}
type followingUserRDtype = {
    resultCode: 0 | 1
    messages: string[]
    data: typeof Object
}

export const usersApi = {
    getUsers(currentPage: number):  Promise<getUsersRDtype> {
        return instance.get(`users?page=${currentPage}`).then(data=>data.data)
    },
    followUser(userId: number):  Promise<followingUserRDtype> {
        return instance.post(`follow/${userId}`).then(data=>data.data)
    },
    unFollowUser(userId: number):  Promise<followingUserRDtype> {
        return instance.delete(`follow/${userId}`).then(data=>data.data)
    },
}


type getUserProfileRDtype = UserProfileType

export const profileApi = {
    getUserProfile(userId: number):  Promise<getUserProfileRDtype> {
        return instance.get(`profile/${userId}`).then(data=>data.data)
    },
}

type authUserRDtype = {
    resultCode: 0
    messages: [],
    data: {
        email: string
        id: number
        login: string
    }
}

export const authApi = {
    authUser():  Promise<authUserRDtype> {
        return instance.get(`auth/me`).then(data=>data.data)
    },
}