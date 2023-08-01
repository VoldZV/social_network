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
}

function App({state:{profilePage, dialogsPage, navbarPage}}: AppPT) {

    return (
        <div className="App">
            <Header/>
            <div className={'underHeader'}>
                <Navbar navbarPage={navbarPage}/>
                <div className={'content'}>
                    <Routes>
                        <Route path={'/profile'} Component={() => <Profile profilePage={profilePage}/>}></Route>
                        <Route path={'/messages/*'} Component={() => <Dialogs dialogsPage={dialogsPage}/>}></Route>
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
