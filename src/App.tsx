import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route, Routes} from 'react-router-dom';
import {StateType} from "./Components/redux/stateType";

type AppPT = {
    state: StateType
    addPost: (postValue: string) => void
    changeTextariaValue: (newPostValue: string) => void
}

function App({state:{profilePage, dialogsPage, navbarPage}, addPost, changeTextariaValue}: AppPT) {

    return (
        <div className="App">
            <Header/>
            <div className={'underHeader'}>
                <Navbar navbarPage={navbarPage}/>
                <div className={'content'}>
                    <Routes>
                        <Route path={'/profile'}
                               element={<Profile profilePage={profilePage} addPost = {addPost} changeTextariaValue = {changeTextariaValue}/>}
                        />
                        <Route path={'/messages/*'} element={<Dialogs dialogsPage={dialogsPage}/>}></Route>
                    </Routes>
                </div>
                <Aside/>
            </div>
        </div>
    );
}

const Aside = () => {
    return <aside className={'aside'}>
        <p>Games</p>
        <p>Features</p>
        <p>Group</p>
    </aside>
}

export default App;
