import React from "react";
import InputText from "../../divers/inputs/input_text";
import {handle} from "../../../controllers/assets/form_controller";
import InputTextArea from "../../divers/inputs/input_textarea";
import BoutonNavigation from "../../divers/bouton_navigation";

export default function FormulaireCreerProjet({projet, setProjet, suivant}){

    // TODO Créer une fonction de validation des champs

    return (
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
                                  imgSrc={"forward_arrow"}
                                  imgFormat={"16"}/>
            </div>
        </div>
    )
}