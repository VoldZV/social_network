import React from 'react';
import {Header} from "./Header";
import {Theader} from "./HeaderContainer";
import axios from "axios";

export class HeaderClassComponent extends React.Component<Theader> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
        })
            .then((res) => {
                console.log('LoginName',this.props.loginName)
                console.log('isAuth',this.props.isAuth)
                console.log(res.data.data)
                this.props.setUserData(res.data.data)
            })
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <Header loginName={this.props.loginName} isAuth={this.props.isAuth}/>
        );
    }
}
