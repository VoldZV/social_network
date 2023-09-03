import {combineReducers, legacy_createStore, Store} from "redux";
import ProfileReducer, {ProfileReducerActionsType} from "./reducers/ProfileReducer";
import DialogsReducer, {DialogsReducerActionsType} from "./reducers/DialogsReducer";
import NavBarReducer, {NavBarReducerActionsType} from "./reducers/NavBarReducer";

export const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    navbarPage: NavBarReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export type DispatchActionType = ProfileReducerActionsType | DialogsReducerActionsType | NavBarReducerActionsType

export type Tstore = Store<AppStateType, DispatchActionType>

export const reduxStore: Tstore = legacy_createStore(rootReducer)