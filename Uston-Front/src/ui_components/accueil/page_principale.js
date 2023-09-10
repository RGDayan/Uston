import React from "react";
import {Route, Routes} from "react-router-dom";
import IndexProjets from "../projets/index_projet/index_projets";
import ResumeProjet from "../projets/afficher_projet/resume_projet";
import CreerProjet from "../projets/creer_projet/creation_projet";
import AffichageProjet from "../projets/afficher_projet/affichage_projet";
import UstonTitre from "./uston_titre";

export default function PagePrincipale() {
    return (
        <main id={"main-page"}
              className={"w-full h-full"}>
            <UstonTitre/>
            <div className={"pt-11 h-full"}>
                <Routes>

                    {/*#region ROUTES DES PROJETS*/}
                    <Route path={"/"} element={<IndexProjets />} />
                    <Route path={"/index-projets"} element={<IndexProjets />}/>
                    <Route path={"/creer-projet"} element={<CreerProjet />}/>
                    <Route path={"/projet/"} element={<AffichageProjet />}>
                        <Route path={"/projet/resume"} element={<ResumeProjet />}/>
                        <Route path={"/projet/panification"} element={<>< />}/>
                    </Route>
                    {/*#endregion ROUTES DES PROJETS*/}

                </Routes>
            </div>
        </main>
    )
}