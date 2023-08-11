import './App.css';
import React from 'react';
import PagePrincipale from "./composants_ui/page_principale";

/**
 * Classe App : Construit la page web et contient les routes de redirections
 * @returns {JSX.Element} Page web construite en ReactJS
 * @constructor
 */
function App() {
    return (
        <div className={
            "flex " +
            "h-full " +
            "text-white " +
            "bg-darkgray-800"}>
            <PagePrincipale />
        </div>
    );
}

export default App;
