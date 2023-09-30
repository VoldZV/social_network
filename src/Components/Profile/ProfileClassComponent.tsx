import React from 'react';
import s from './Profile.module.css'
import {MyPostsContainer} from "./Mysposts/MyPostsContainer";
import {Tprofile} from "./ProfileContainer";
import {Loading} from "../common/Loading/Loading";

type ProfilePT = Tprofile

export class ProfileClassComponent extends React.Component<ProfilePT> {
    componentDidMount() {
        let userId = +this.props.params.userId || this.props.authUserId || 25871
        this.props.getUserProfileTC(userId)
    }

    render () {
        const {user} = this.props
        return (
                    <div className={s.profile}>
                        <div className={s.profileHeaderBG}></div>
                        {user ?
                            <ProfileInfo name={user.fullName || 'name is not defined'}
                                         town={user.aboutMe || 'unknown information'}
                                         avatar={user.photos.large || user.photos.small || "https://img.icons8.com/?size=512&id=65220&format=png"}
                            />
                            :
                            <Loading/> }
                        <MyPostsContainer/>
                    </div>
        )
    };
}

type ProfileInfoPT = {
    name: string
    town: string
    avatar: string
}

const ProfileInfo: React.FC<ProfileInfoPT> = ({name, town,avatar}) => {
    return (
        <div className={s.profileInfo}>
            <img src={avatar} alt="ava"/>
            <div className={s.description}>
                <div>{name}</div>
                <div>{town}</div>
            </div>
        </div>
    )
}
