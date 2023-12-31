import {connect} from "react-redux";
import {authUserTC} from "../redux/reducers/authReducer";
import {HeaderClassComponent} from "./HeaderClassComponent";
import {AppStateType} from "../redux/redux-store";

type TmstpHeader = {
    isAuth: boolean
    loginName: string | null
}

const mstpHeader = (state: AppStateType): TmstpHeader => ({
    isAuth: state.auth.isAuth,
    loginName: state.auth.login
})

type TmdtpHeader = {
    // setUserData: (userData: {
    //     id: null | number
    //     email: null | string
    //     login: null | string
    // }) => void
    authUserTC: () => void
}

const mdtpHeader: TmdtpHeader = {
    // setUserData
    authUserTC
}


export type Theader = TmstpHeader & TmdtpHeader

export const HeaderContainer = connect(mstpHeader, mdtpHeader)(HeaderClassComponent)