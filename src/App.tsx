import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Profile} from "./Components/Profile/Profile";
import {Route, Routes} from 'react-router-dom';
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {NavbarContainer} from "./Components/Navbar/NavbarContainer";
import {Aside} from "./Aside/Aside";
import {UsersContainer} from "./Components/Users/UsersContainer";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className={'underHeader'}>
                <NavbarContainer/>
                <div className={'content'}>
                    <Routes>
                        <Route path={'/profile'} element={<Profile/>}/>
                        <Route path={'/messages/*'} element={<DialogsContainer/>}/>
                        <Route path={'/users'} element={<UsersContainer/>}/>
                    </Routes>
                </div>
                <Aside/>
            </div>
        </div>
    );
}

export default App;
