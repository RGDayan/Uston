import React, {useState} from "react";
import TitreFormulaireCreerProjet from "./titre_formulaire_creer_projet";
import InputText from "../../divers/inputs/input_text";
import {handle} from "../../../controllers/assets/form_controller";
import ColorPicker from "../../divers/inputs/color_picker";
import {technologieTemplate} from "../../../controllers/objets/technologie";
import BoutonNavigation from "../../divers/bouton_navigation";

export default function FormulaireCreerTechnologie({setReloadListe, toggleVisibilite}){
    const [technologie, setTechnologie] = useState(technologieTemplate);
    const pickerId = "technologie";

    function creerTechnologie(){
        fetch(process.env.REACT_APP_URL_API + "/technologies", {
            method: "POST",
            body: JSON.stringify(technologie)
        })

        // TODO Notifier l'appel grâce au retour de l'API create_technologie

        setReloadListe((prev) => !prev);
        annulerTechnologie()
    }

    function annulerTechnologie(){
        setTechnologie(technologieTemplate);
        toggleVisibilite((prev) => !prev);
    }

    return (
        <section id={"formulaire-creer-technologie"}>
            <TitreFormulaireCreerProjet titre={"Créer une nouvelle technologie"}
                                        messageInfo={"Ajoutez une nouvelle technologie lorsque celle-ci n'existe pas dans la liste."}/>
            <div className="ml-3">
                <InputText name={"libelle"}
                           libelle={"Libellé"}
                           onChange={(e) => handle(e, technologie, setTechnologie)}/>
                <InputText name={"lienDoc"}
                           libelle={"Lien à la documentation"}
                           onChange={(e) => handle(e, technologie, setTechnologie)}/>
                <ColorPicker id={pickerId}
                             name={"codeCouleur"}
                             label={"Code couleur"}
                             value={technologie.codeCouleur}
                             state={technologie}
                             setState={setTechnologie}/>
            </div>

            <div className="flex justify-center">
                <BoutonNavigation id={"bouton-creer-technologie"}
                                  contenu={"Valider"}
                                  className={"w-fit"}
                                  onclick={creerTechnologie}
                                  imgSrc={"plus_dark"}
                                  imgFormat={"16"}/>
                <BoutonNavigation id={"bouton-annuler-technologie"}
                                  contenu={"Annuler"}
                                  className={"w-fit bg-red-600 hover:bg-hover"}
                                  onclick={annulerTechnologie}/>
            </div>
        </section>
    )
}