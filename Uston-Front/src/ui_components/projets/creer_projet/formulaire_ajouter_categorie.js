import React, {useState} from "react";
import InputText from "../../divers/inputs/input_text";
import {handle} from "../../../controllers/form_controller";

export default function FormulaireAjouterCategorie({categories, suivant}){
    const [categorie, setCategorie] = useState();

    return (
        <section id={"formulaire-categories"}
                 className={"m-3"}>
            <InputText name={"libelle"}
                       libelle={"Libellé"}
                       onChange={(e) => handle(e, categorie, setCategorie)}/>

        </section>
    )

}