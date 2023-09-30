import React from 'react';
import {AppStateType, AppActionTypes} from "../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Navbar} from "./Navbar";
import {NavbarPageType} from "../redux/stateType";

type TmstpNavbar = {
    navbarPage: NavbarPageType
}

const mstpNavbar = (state: AppStateType) : TmstpNavbar => ({
    navbarPage: state.navbarPage
})

type TmdtpNavbar = {

}

const mdtpNavBar = (dispatch: Dispatch<AppActionTypes>) : TmdtpNavbar => ({

})

export type TnavBar = TmstpNavbar & TmdtpNavbar

export const NavbarContainer = connect(mstpNavbar, mdtpNavBar)(Navbar)