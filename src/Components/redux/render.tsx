import React from 'react';
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "../../App";
import {StateType} from "./stateType";
import {addPost, changeTextariaValue} from "./state";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export const reRenderEntireTree = (state: StateType) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state = {state}
                     addPost = {addPost}
                     changeTextariaValue = {changeTextariaValue}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
};

