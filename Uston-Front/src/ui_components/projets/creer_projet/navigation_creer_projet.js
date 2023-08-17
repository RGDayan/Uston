import React from "react";
import BoutonNavigation from "../../divers/boutons/bouton_navigation";

export default function NavigationCreerProjet(){

    return (
        <nav id={"creer-projet-navigation"} className={"flex"}>
            <BoutonNavigation id={"bouton-retour"}
                              onclick={() => {window.history.back()}}
                              contenu={"Retour"}
                              imgSrc={"back_arrow"}
                              imgFormat={"16"}
            />
        </nav>
    )
}