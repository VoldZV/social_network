import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Route, Routes} from 'react-router-dom';
import {StateType} from "./Components/redux/stateType";
import {DispatchActionType} from "./Components/redux/store";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {reduxStore} from "./Components/redux/redux-store";

type AppPT = {
    state: StateType
    dispatch: (action: DispatchActionType) => void
}

function App({state:{navbarPage}, dispatch}: AppPT) {

    return (
        <div className="App">
            <Header/>
            <div className={'underHeader'}>
                <Navbar navbarPage={navbarPage}/>
                <div className={'content'}>
                    <Routes>
                        <Route path={'/profile'}
                               element={<Profile/>}
                        />
                        <Route path={'/messages/*'} element={<DialogsContainer store={reduxStore}/>}></Route>
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
