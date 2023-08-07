import React from "react";
import LienNavigation from "../../divers/lien_navigation";

export default function NavigationIndexProjets(){
    return (
        <div id={"navigation_index_projets"} className={"flex"}>
            <LienNavigation id={"lien_creer_projet"}
                             lien={"/creer-projet"}
                             contenu={"Créer un projet"}
                             imgSrc={"plus_dark"}
                             imgFormat={"16"}/>
            <LienNavigation id={"lien_afficher_parametres"}
                             lien={"/afficher-parametres"}
                             contenu={"Paramètres"}
                             imgSrc={"settings"}
                             imgFormat={"16"}/>
        </div>
    );
}