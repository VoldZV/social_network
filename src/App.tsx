import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs, DialogsItemPT} from "./Components/Dialogs/Dialogs";
import {Route, Routes} from 'react-router-dom';
import {PostType} from "./Components/Profile/Mysposts/MyPosts";
import {MessageItemType} from "./index";

type AppPT = {
    postsData: PostType[]
    dialogsUsersData: DialogsItemPT[]
    messageItemsData: MessageItemType[]
}

function App({postsData, messageItemsData, dialogsUsersData}: AppPT) {

    return (
        <div className="App">
            <Header/>
            <div className={'underHeader'}>
                <Navbar/>
                <div className={'content'}>
                    <Routes>
                        <Route path={'/profile'} Component={() => <Profile postsData={postsData}/>}></Route>
                        <Route path={'/messages/*'} Component={() => <Dialogs dialogsUsersData={dialogsUsersData} messageItemsData={messageItemsData}/>}></Route>
                    </Routes>
                </div>
                <aside className={'aside'}>
                    <p>Games</p>
                    <p>Features</p>
                    <p>Group</p>
                </aside>
            </div>
        </div>
    );
}

export default App;
