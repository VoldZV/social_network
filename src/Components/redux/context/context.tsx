import React, {Context} from "react";
import {reduxStore, Tstore} from "../redux-store";

type TstoreContext = Context<Tstore>

export const StoreContext: TstoreContext = React.createContext<Tstore>(reduxStore)


type ProviderPT = {
    store: Tstore
    children: React.ReactNode
}

export const Provider: React.FC<ProviderPT> = ({store,children}) => {
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )
}