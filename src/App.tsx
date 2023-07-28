import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";

function App() {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <Profile/>
            <div className={'promo'}>
                <p>Games</p>
                <p>Features</p>
                <p>Group</p>
            </div>
        </div>
    );
}

export default App;
