import React from 'react';
import {Header} from "./Header";
import {Theader} from "./HeaderContainer";

export class HeaderClassComponent extends React.Component<Theader> {
    componentDidMount() {
        this.props.authUserTC()
    }

    render() {
        return (
            <Header loginName={this.props.loginName} isAuth={this.props.isAuth}/>
        );
    }
}
