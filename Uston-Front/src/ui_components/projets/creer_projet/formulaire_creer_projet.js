import React from "react";
import InputText from "../../divers/inputs/input_text";
import {handle} from "../../../controllers/form_controller";
import InputTextArea from "../../divers/inputs/input_textarea";
import BoutonNavigation from "../../divers/bouton_navigation";

export default function FormulaireCreerProjet({projet, setProjet, suivant}){
    return (
        <section id={"formulaire-creer-projet"}
                 className={"ml-5 w-1/2 "}>
            <h1 id={"titre-creer-projet"}
                className={"p-2 text-xl font-bold border-b border-darkgray-500"}>
                Nommer votre projet
            </h1>
            <p className={"text-xs text-darkgray-400"}>Attention : Le projet sera créé seulement à la confirmation des 3 formulaires</p>

            <div id={"formulaire-projet"}
                 className={"m-3"}>
                <InputText libelle={"Titre"}
                           name={"titre"}
                           onChange={(e) => handle(e, projet, setProjet)}/>
                <InputText libelle={"Description"}
                           name={"description"}
                           onChange={(e) => handle(e, projet, setProjet)}/>
                <InputTextArea libelle={"Besoin"}
                               name={"besoin"}
                               onChange={(e) => handle(e, projet, setProjet)}/>
                <div className={"flex justify-center mt-2"}>
                    <BoutonNavigation id={"bouton-suivant-projet"}
                                      contenu={"Suivant"}
                                      className={"w-fit border-b border-darkgray-500"}
                                      onclick={suivant}
                    />
                </div>
            </div>
        </section>
    )
}