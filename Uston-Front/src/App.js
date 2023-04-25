import './App.css';
import React from 'react';
import LateralPanel from "./components/assets/navigation/lateralPanel";
import CurrentPage from "./components/pages/currentpage";

/**
 * Classe App : Construit la page web et contient les routes de redirections
 * @returns {JSX.Element} Page web construite en ReactJS
 * @constructor
 */
function App() {
    return (
        <div className={
            "flex " +
            "h-full "}>
            <LateralPanel />
            <CurrentPage />
        </div>
    );
}

export default App;
