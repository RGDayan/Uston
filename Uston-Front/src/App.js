import './App.css';
import React from 'react';
import Page_principale from "./ui_components/accueil/page_principale";
import Uston_titre from "./ui_components/accueil/uston_titre";

/**
 * Classe App : Construit la page web et contient les routes de redirections
 * @returns {JSX.Element} Page web construite en ReactJS
 * @constructor
 */
function App() {
    return (
        <div className={
            "flex flex-col " +
            "h-full"}>
            <Uston_titre/>
            <Page_principale/>
        </div>
    );
}

export default App;
