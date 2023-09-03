import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {reduxStore} from "./Components/redux/redux-store";
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={reduxStore}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);


// Ald code for own state and store
// const reRenderEntireTree = () => {
//     root.render(
//         <React.StrictMode>
//             <BrowserRouter>
//                 <Provider store={reduxStore}>
//                     <App/>
//                 </Provider>
//             </BrowserRouter>
//         </React.StrictMode>
//     );
// };
// reRenderEntireTree()
// reduxStore.subscribe(reRenderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
