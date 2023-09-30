import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {NavbarContainer} from "./Components/Navbar/NavbarContainer";
import {Aside} from "./Aside/Aside";
import {UsersContainer} from "./Components/Users/UsersContainer";
import {ProfileContainer} from "./Components/Profile/ProfileContainer";
import {HeaderContainer} from "./Components/Header/HeaderContainer";

function App() {
    return (
        <div className="App">
            <HeaderContainer/>
            <div className={'underHeader'}>
                <NavbarContainer/>
                <div className={'content'}>
                    <Routes>
                        {/*<Route path={'/'} element={<Navigate to={'/profile'}/>}/>*/}
                        <Route path={'/profile/:userId?'} element={<ProfileContainer/>}/>
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
