import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route, Routes} from 'react-router-dom';
import {StateType} from "./Components/redux/stateType";
import {ActionsType} from "./Components/redux/store";

type AppPT = {
    state: StateType
    dispatch: (action: ActionsType) => void
}

function App({state:{profilePage, dialogsPage, navbarPage}, dispatch}: AppPT) {

    return (
        <div className="App">
            <Header/>
            <div className={'underHeader'}>
                <Navbar navbarPage={navbarPage}/>
                <div className={'content'}>
                    <Routes>
                        <Route path={'/profile'}
                               element={<Profile profilePage={profilePage} dispatch={dispatch}/>}
                        />
                        <Route path={'/messages/*'} element={<Dialogs dialogsPage={dialogsPage} dispatch={dispatch}/>}></Route>
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
