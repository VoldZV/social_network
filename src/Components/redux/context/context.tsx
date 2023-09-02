import React, {Context} from "react";
import {Tstore} from "../redux-store";

type TstoreContext = Context<Tstore>

export const StoreContext: TstoreContext = React.createContext<Tstore>({} as Tstore )


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