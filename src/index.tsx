import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import s from './index.module.css'
import {Provider} from "react-redux";
import {store} from "./redux/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <div className={s.index}>
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>
    </div>
)

reportWebVitals();
