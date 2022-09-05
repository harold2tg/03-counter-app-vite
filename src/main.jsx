import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from './HelloWordApp';
// import App from './HelloWordApp';
import {HelloWordApp} from './HelloWordApp';
import {FirstApp} from './FirstApp';
import './styles.css';



ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWordApp/>
        <FirstApp/>
    </React.StrictMode>
)