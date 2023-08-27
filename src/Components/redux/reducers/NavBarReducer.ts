import {NavbarPageType} from "../stateType";
import {DispatchActionType} from "../store";

export const NavBarReducer = (state: NavbarPageType, action: DispatchActionType): NavbarPageType => {
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