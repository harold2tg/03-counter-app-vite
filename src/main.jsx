import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from './HelloWordApp';
// import App from './HelloWordApp';
import {HelloWordApp} from './HelloWordApp';
import {CounterApp} from './CounterApp';
import {FirstApp} from './FirstApp';
import './styles.css';



ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWordApp/> */}
        {/* <FirstApp title='Hola soy Harold' subtitulo='Soy ingeniero de sistemas' nombre='creado por isaias'/> */}
        <CounterApp value={1}/>
    </React.StrictMode>
)