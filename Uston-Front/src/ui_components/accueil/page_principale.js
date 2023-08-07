import React from "react";
import {Route, Routes} from "react-router-dom";
import IndexProjets from "../projets/index_projet/index_projets";
import AffichageProjet from "../projets/affichage_projet";
import CreerProjet from "../projets/creer_projet/creer_projet";

export default function PagePrincipale() {
    return (
        <main id={"main-page"}>

            <Routes>

                {/*#region ROUTES DES PROJETS*/}
                <Route path={"/"} element={<IndexProjets />} />
                <Route path={"/index-projets"} element={<IndexProjets />}/>
                <Route path={"/creer-projet"} element={<CreerProjet />}/>
                <Route path={"/index-projets/:idProjet"} element={<AffichageProjet />} />
                {/*#endregion ROUTES DES PROJETS*/}

            </Routes>
        </main>
    )
}