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

function App({state}: AppPT) {

    return (
        <div className="App">
            <Header/>
            <div className={'underHeader'}>
                <Navbar/>
                <div className={'content'}>
                    <Routes>
                        <Route path={'/profile'} Component={() => <Profile profilePage={state.profilePage}/>}></Route>
                        <Route path={'/messages/*'} Component={() => <Dialogs dialogsPage={state.dialogsPage}/>}></Route>
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
