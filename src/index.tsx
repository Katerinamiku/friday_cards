import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import reportWebVitals from "./reportWebVitals";
import {store} from "./store/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
);

reportWebVitals();
