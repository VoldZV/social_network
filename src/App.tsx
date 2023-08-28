import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Route, Routes} from 'react-router-dom';
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {StoreContext} from './Components/redux/context/context';

// type AppPT = {
//
// }

function App() {

    return (
        <div className="App">
            <Header/>
            <div className={'underHeader'}>
                <StoreContext.Consumer>
                    {(store => <Navbar navbarPage={store.getState().navbarPage}/>)}
                </StoreContext.Consumer>
                <div className={'content'}>
                    <Routes>
                        <Route path={'/profile'}
                               element={<Profile/>}
                        />
                        <Route path={'/messages/*'} element={<StoreContext.Consumer>
                            {(store => <DialogsContainer store={store}/>)}
                        </StoreContext.Consumer>}>
                        </Route>
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
