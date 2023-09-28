import React from 'react';
import {Tusers} from "./UsersContainer";
import {Users} from "./Users";
import {Loading} from "../common/Loading/Loading";
import {usersApi} from "../../API/api";

export class UsersClassComponent extends React.Component<Tusers> {

    componentDidMount() {
        this.props.toggleIsLoading()
        usersApi.getUsers(this.props.usersPage.currentPage)
            .then(res => {
                this.props.setUsers(res.items)
                this.props.setTotalCount(res.totalCount)
            })
            .finally(() => {
                this.props.toggleIsLoading()
            })
    }

    changeCurrentPage(currentPage: number) {
        this.props.toggleIsLoading()
        usersApi.getUsers(currentPage)
            .then(res => {
                this.props.setUsers(res.items)
                this.props.setCurrentPage(currentPage)
            })
            .finally(() => {
                this.props.toggleIsLoading()
            })
    }

    toggleFollow(userId: number) {
        this.props.toggleFollow(userId)
    }

    render() {
        const countOfUserPages = Math.ceil(this.props.usersPage.totalCount / this.props.usersPage.pageSize)
        const step = 10
        const startLinkNumber = 1 + step * (Math.ceil(this.props.usersPage.currentPage / step) - 1)

        return (
            <>
                {this.props.isLoading ?
                    <Loading/>
                    :
                    <Users users={this.props.usersPage.users}
                           changeCurrentPage={this.changeCurrentPage.bind(this)}
                           step={step}
                           countOfUserPages={countOfUserPages}
                           startLinkNumber={startLinkNumber}
                           endLinkNumber={startLinkNumber + step - 1}
                           currentPage={this.props.usersPage.currentPage}
                           toggleFollow={this.toggleFollow.bind(this)}
                           followingInProgressUsers={this.props.usersPage.followingInProgressUsers}
                           addFollowingInProgressUser={this.props.addFollowingInProgressUser}
                           removeFollowingInProgressUser={this.props.removeFollowingInProgressUser}
                    />
                }
            </>
            // <div>
            //     <div>
            //         <button onClick={changePagesListDown}>list down</button>
            //         {linkToRender}
            //         <button onClick={changePagesListUp}>list up</button>
            //         <div>startLinkNumber {startLinkNumber}</div>
            //         <div>Count of users {countOfUserPages}</div>
            //         <div>Current page {this.props.usersPage.currentPage}</div>
            //     </div>
            //     {this.props.usersPage.users.map(user => (
            //         <div key={user.id}>
            //             <img style={{width: "40px", height: "40px"}} src={user.photos.large || user.photos.small || "https://cdn.icon-icons.com/icons2/1993/PNG/512/account_avatar_face_man_people_profile_user_icon_123197.png"} alt="PHOTO"/>
            //             {user.name}
            //             <button onClick={()=>this.toggleFollow(user.id)}>{user.followed ? "unfollow" : "follow"}</button>
            //         </div>))}
            // </div>

        )
    }
}