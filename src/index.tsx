import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import s from './index.module.css'
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./Redux/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <HashRouter>
        <React.StrictMode>
            <div className={s.index}>
                <Provider store={store}>
                    <App/>
                </Provider>
            </div>
        </React.StrictMode>
    </HashRouter>
)

reportWebVitals();
