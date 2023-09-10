import React from "react";
import InputText from "../../divers/inputs/input_text";
import ColorPicker from "../../divers/inputs/color_picker";
import TitreFormulaire from "./titre_formulaire";
import {useDispatch, useSelector} from "react-redux";
import {resetCategorie, setCategorie, setCodeCouleur} from "../../../redux/categories/categorie_slicer";
import {selectCategorie} from "../../../redux/selectors";
import {ajouterCategorieProjet} from "../../../redux/projets/projet_slicer";
import BoutonSubmit from "../../divers/boutons/bouton_submit";

export default function FormulaireAjouterCategorie(){
    const categorie = useSelector(selectCategorie)
    const dispatch = useDispatch();

    const pickerId = "codeCouleur-categorie";

    function ajouterCategorie() {
        dispatch(ajouterCategorieProjet(categorie))
        dispatch(resetCategorie())

        let picker = document.getElementById("color-picker-" + pickerId);
        picker.classList.add("hidden");
    }

    return (
        <>
            <TitreFormulaire titre={"Créez vos categories"}
                             messageInfo={"Les catégories sont les fonctionnalités de votre projet. " +
                                 "Vous pourrez les utiliser en tant que Tag"}/>
            <section id={"formulaire-categories"}
                     className={"p-3"}>
                <InputText name={"libelle"}
                           libelle={"Libellé"}
                           value={categorie.libelle}
                           className={"max-w-96"}
                           onChange={(e) => dispatch(setCategorie(e))}/>
                <ColorPicker id={pickerId}
                             name={"codeCouleur"}
                             libelle={"Code couleur"}
                             value={categorie.codeCouleur}
                             dispatch={(e) => dispatch(setCodeCouleur(e))}/>

                <BoutonSubmit id={"bouton-ajouter-categorie"}
                              contenu={"Ajouter"}
                              className={"w-fit "}
                              onclick={ajouterCategorie}
                              imgSrc={"plus_dark"}
                              imgFormat={"16"}/>
            </section>
        </>

    )
}
