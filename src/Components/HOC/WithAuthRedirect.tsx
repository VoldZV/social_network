import React from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {Navigate} from "react-router-dom";


export function WithAuthRedirect<T extends {}>(Component: React.ComponentType<T>) {
    const RedirectComponent: React.ComponentType<T> = (props) => {
        const isAuth = useSelector<AppStateType>(state => state.auth.isAuth)
        return isAuth ? <Component {...props} />
            : <Navigate to={'/login'} />
    }
    return RedirectComponent
}
