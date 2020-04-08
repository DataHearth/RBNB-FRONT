import React from 'react';
import './Home.css';
import './home-script.js';

function Home() {
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
        <section className="home">
            <div className="home-contain home-contain-left">
                <div className="home-description">
                    <h3>Qu'est ce que RBNB ?</h3>
                    <p>RBNB est une plateforme qui s'adresse uniquement aux étudiants. Elle leur permet de louer un logement simplement et en toute tranquillité, afin de faciliter au maximum leur recherche de logement.</p>
                </div>
            </div>
            <div className="home-contain home-contain-right">
                <div className="quick-search">
                    <div className="quick-search-item quick-search-item-title">
                        Réserver des logements et bien plus encore
                    </div>
                    <div className="quick-search-item quick-search-item-input">
                        <div className="quick-search-item-input-title">Où</div>
                        <div className="quick-search-item-input-input">
                            <input className="custom-input" type="text" placeholder="Partout"></input>
                        </div>
                    </div>
                    <div className="quick-search-item quick-search-item-input">
                        <div className="quick-search-item-input-title">
                            <div className="quick-search-item-input-title-split">Arrivée</div>
                            <div className="quick-search-item-input-title-split">Départ</div>
                        </div>
                        <div className="quick-search-item-input-input">
                            <input className="custom-input custom-input-split" type="date" placeholder="jj/mm/aaaa"></input>
                            <input className="custom-input custom-input-split" type="date" placeholder="jj/mm/aaaa"></input>
                        </div>
                    </div>
                    <div className="quick-search-item quick-search-item-input">
                        <div className="quick-search-item-input-title">Nombre d'étudiant(s)</div>
                        <div className="quick-search-item-input-input">
                            <select className="custom-input" placeholder="Partout">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    <div className="quick-search-item quick-search-item-button">
                        <div className="quick-search-item-button-button">
                            <button className="custom-button">Rechercher</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
}

export default Home;