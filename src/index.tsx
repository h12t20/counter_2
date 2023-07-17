import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {HashRouter} from "react-router-dom";
import {store} from "./Redux/store";
import {StateType} from "./Redux/reducer";
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const rerenderEntireTree=(state:StateType)=>{
root.render(
    <HashRouter>
        <React.StrictMode>
                <App />
        </React.StrictMode>
    </HashRouter>
)}
rerenderEntireTree(store.getState())
store.subscribe(()=>{
    let state:StateType=store.getState()
    rerenderEntireTree(state)
})
reportWebVitals();
