import {combineReducers, legacy_createStore, Store} from "redux";
import ProfileReducer, {ProfileReducerActionsType} from "./reducers/ProfileReducer";
import DialogsReducer, {DialogsReducerActionsType} from "./reducers/DialogsReducer";
import NavBarReducer, {NavBarReducerActionsType} from "./reducers/NavBarReducer";
import {UsersReducer, UsersReducerActionsType} from "./reducers/UsersReducer";

export const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    navbarPage: NavBarReducer,
    usersPage: UsersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export type DispatchActionType = ProfileReducerActionsType | DialogsReducerActionsType | NavBarReducerActionsType | UsersReducerActionsType

export type Tstore = Store<AppStateType, DispatchActionType>

export const reduxStore: Tstore = legacy_createStore(rootReducer)