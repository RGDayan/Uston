import './App.css';
import React from 'react';
import PagePrincipale from "./ui_components/accueil/page_principale";

/**
 * Classe App : Construit la page web et contient les routes de redirections
 * @returns {JSX.Element} Page web construite en ReactJS
 * @constructor
 */
function App() {
    return (
        <div className={
            "flex flex-col " +
            "h-full " +
            "text-white " +
            "bg-darkgray-800"}>
            <PagePrincipale/>
        </div>
    );
}

export default App;
