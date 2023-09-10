import React from "react";
import NavigationCreerProjet from "./navigation_creer_projet";
import FormulaireAjouterCategorie from "./formulaire_ajouter_categorie";
import FormulaireAjouterTechnologie from "./formulaire_ajouter_technologie";
import FormulaireCreerProjet from "./formulaire_creer_projet";

export default function CreerProjet(){

    return (
        <div className={"w-full"}>
            <NavigationCreerProjet />

            <div className="flex">

                <FormulaireCreerProjet />

                <section id="section-relation-projet"
                         className="w-1/2">

                    <FormulaireAjouterCategorie/>

                    <FormulaireAjouterTechnologie/>

                </section>
            </div>
        </div>
    )
}