import React, {useState} from "react";
import InputText from "../../divers/inputs/input_text";
import {handle} from "../../../controllers/form_controller";
import ColorPicker from "../../divers/inputs/color_picker";
import {categorieTemplate} from "../../../controllers/objets/categorie";
import BoutonNavigation from "../../divers/bouton_navigation";

export default function FormulaireAjouterCategorie({setCategories, suivant}){
    const [categorie, setCategorie] = useState(categorieTemplate);
    const pickerId = "codeCouleur-categorie";

    function ajouterCategorie() {
        setCategories((prev) => [...prev, [{
            categorie
        }]]);

        let picker = document.getElementById("color-picker-" + pickerId);
        picker.classList.add("hidden");
    }

    return (
        <section id={"formulaire-categories"}
                 className={"m-3"}>
            <InputText name={"libelle"}
                       libelle={"Libellé"}
                       onChange={(e) => handle(e, categorie, setCategorie)}/>
            <ColorPicker id={pickerId}
                         name={"codeCouleur"}
                         label={"Code couleur"}
                         value={categorie.codeCouleur}
                         state={categorie}
                         setState={setCategorie}/>

            <BoutonNavigation id={"bouton-ajouter-categorie"}
                              contenu={"Ajouter"}
                              className={"w-fit "}
                              onclick={ajouterCategorie}
                              imgSrc={"plus_dark"}
                              imgFormat={"16"}/>

            <div className={"flex justify-end mt-2"}>
                <BoutonNavigation id={"bouton-ajouter-categorie"}
                                  contenu={"Suivant"}
                                  className={"w-fit border-b border-darkgray-500"}
                                  onclick={suivant}
                                  imgSrc={"forward_arrow"}
                                  imgFormat={"16"}/>
            </div>
        </section>
    )
}