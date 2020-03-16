import React from 'react';
import logo from './logo.svg';
import './App.css';
import './app-script.js';

function App() {
    return ( 
    <div className="App">
        <header className="App-header">
            <div className="logo-header"></div>
            <div className="menu-items">
                <div className="collapse-menu">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>              
                </div>
                <div className="items">
                    <a className="item">Héberger</a>
                    <a className="item">Inscription</a>
                    <a className="item">Connexion</a>
                </div>                
            </div>
        </header>
    </div>
    );
}

export default App;