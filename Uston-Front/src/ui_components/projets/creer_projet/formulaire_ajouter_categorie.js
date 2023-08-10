import React, {useState} from "react";
import InputText from "../../divers/inputs/input_text";
import {handle} from "../../../controllers/assets/form_controller";
import ColorPicker from "../../divers/inputs/color_picker";
import {categorieTemplate} from "../../../controllers/objets/categorie";
import BoutonNavigation from "../../divers/bouton_navigation";
import TitreFormulaireCreerProjet from "./titre_formulaire_creer_projet";

export default function FormulaireAjouterCategorie({setProjet}){
    const [categorie, setCategorie] = useState(categorieTemplate);
    const pickerId = "codeCouleur-categorie";

    function ajouterCategorie() {
        setProjet((prev) => {
            prev.categories.push(categorie);
            return prev;
        });

        let picker = document.getElementById("color-picker-" + pickerId);
        picker.classList.add("hidden");
    }

    return (
        <>
            <TitreFormulaireCreerProjet titre={"Créez vos categories"}
                                        messageInfo={"Les catégories sont les fonctionnalités de votre projet. " +
                                            "\nVous pourrez les utiliser en tant que Tag"}/>
            <section id={"formulaire-categories"}
                     className={"p-3"}>
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
            </section>
        </>

    )
}
