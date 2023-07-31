import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {PostType} from "./Components/Profile/Mysposts/MyPosts";
import {DialogsItemPT} from "./Components/Dialogs/Dialogs";

//constant to Profile component
const postsData: PostType[] = [
    {id: 1, message: 'First post message', likesCount: 7},
    {id: 2, message: 'Second post message', likesCount: 1},
    {id: 3, message: 'Third post message', likesCount: 3},
]


//constant to Dialogs component
const dialogsUsersData: DialogsItemPT[] = [
    {id: 1, name: 'Galina'},
    {id: 2, name: 'Alexander'},
    {id: 3, name: 'Nataliya'},
    {id: 4, name: 'Danil'},
    {id: 5, name: 'Pavel'},
    {id: 6, name: 'Ilya'},
]

export type MessageItemType = {
    id: number
    message: string
}

const messageItemsData: MessageItemType[] = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'What`up man'},
    {id: 3, message: 'Yo'}
]


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App postsData={postsData}
                 dialogsUsersData={dialogsUsersData}
                 messageItemsData={messageItemsData}
            />
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
