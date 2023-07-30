import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';

function App() {

    return (
        <div className="App">
            <Header/>
            <div className={'underHeader'}>
                <Navbar/>
                <div className={'content'}>
                    <Routes>
                        <Route path={'/profile'} element={<Profile/>}></Route>
                        <Route path={'/messages/*'} element={<Dialogs/>}></Route>
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
