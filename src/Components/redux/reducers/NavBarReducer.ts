import {NavbarPageType} from "../stateType";
import {DispatchActionType, store} from "../store";

export const NavBarReducer = (state: NavbarPageType = store._state.navbarPage, action: DispatchActionType): NavbarPageType => {
    switch (action.type) {
        case "CHANGE-ANYTHING":
            return {...state}
        default:
            return state
    }
};


// Reducer and ActionsType
export type NavBarReducerActionsType = changeAnything

type changeAnything = {
    type: "CHANGE-ANYTHING"
}


// Action creators


export default NavBarReducer;