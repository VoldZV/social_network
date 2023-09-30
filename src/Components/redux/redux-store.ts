import {combineReducers, legacy_createStore, Store, applyMiddleware } from "redux";
import ProfileReducer, {ProfileReducerActionsType} from "./reducers/ProfileReducer";
import DialogsReducer, {DialogsReducerActionsType} from "./reducers/DialogsReducer";
import NavBarReducer, {NavBarReducerActionsType} from "./reducers/NavBarReducer";
import {UsersReducer, UsersReducerActionsType} from "./reducers/UsersReducer";
import {authReducer, AuthReducerActionType} from "./reducers/authReducer";
import thunkMiddleware  from 'redux-thunk'

export const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    navbarPage: NavBarReducer,
    usersPage: UsersReducer,
    auth: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export type AppActionTypes = ProfileReducerActionsType | DialogsReducerActionsType | NavBarReducerActionsType | UsersReducerActionsType | AuthReducerActionType

export type Tstore = Store<AppStateType, AppActionTypes>

export const reduxStore: Tstore = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))


// @ts-ignore
window.store = reduxStore