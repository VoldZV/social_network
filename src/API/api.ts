import axios, {AxiosInstance} from "axios";


const instance: AxiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '9a4825e2-08d3-45d5-9581-2297f88ccdf2'
    }
})


export const usersApi = {
    getUsers(currentPage: number):  Promise<any> {
        return instance.get(`users?page=${currentPage}`).then(data=>data.data)
    },
    followUser(userId: number):  Promise<any> {
        return instance.post(`follow/${userId}`).then(data=>data.data)
    },
    unFollowUser(userId: number):  Promise<any> {
        return instance.delete(`follow/${userId}`).then(data=>data.data)
    },
}