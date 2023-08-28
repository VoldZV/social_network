import {combineReducers, legacy_createStore, Store} from "redux";
import ProfileReducer from "./reducers/ProfileReducer";
import DialogsReducer from "./reducers/DialogsReducer";
import NavBarReducer from "./reducers/NavBarReducer";
import {DispatchActionType} from "./store";

const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    navbarPage: NavBarReducer
})
export type Tstore = Store<ReturnType<typeof rootReducer>, DispatchActionType>

export const reduxStore: Tstore = legacy_createStore(rootReducer)