import {combineReducers, legacy_createStore, Store} from "redux";
import ProfileReducer, {ProfileReducerActionsType} from "./reducers/ProfileReducer";
import DialogsReducer, {DialogsReducerActionsType} from "./reducers/DialogsReducer";
import NavBarReducer, {NavBarReducerActionsType} from "./reducers/NavBarReducer";
import {UsersReducer, UsersReducerActionsType} from "./reducers/UsersReducer";
import {authReducer, AuthReducerActionType} from "./reducers/authReducer";

export const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    navbarPage: NavBarReducer,
    usersPage: UsersReducer,
    auth: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export type DispatchActionType = ProfileReducerActionsType | DialogsReducerActionsType | NavBarReducerActionsType | UsersReducerActionsType | AuthReducerActionType

export type Tstore = Store<AppStateType, DispatchActionType>

export const reduxStore: Tstore = legacy_createStore(rootReducer)


// @ts-ignore
window.store = reduxStore