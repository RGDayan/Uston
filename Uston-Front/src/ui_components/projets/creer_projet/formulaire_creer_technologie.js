import React, {useState} from "react";
import TitreFormulaire from "./titre_formulaire";
import ColorPicker from "../../divers/inputs/color_picker";
import BoutonNavigation from "../../divers/navigations/bouton_navigation";
import {useDispatch, useSelector} from "react-redux";
import {selectTechnologie} from "../../../redux/selectors";
import {resetTechnologie, setCodeCouleur, setTechnologie} from "../../../redux/technologies/technologie_slicer";
import InputText from "../../divers/inputs/input_text";
import {useMutation} from "react-query";

export default function FormulaireCreerTechnologie({setReload}){
    const technologie = useSelector(selectTechnologie);
    const dispatch = useDispatch();
    const mutation = useMutation(
        "technologie_create",
        async () => {
            await fetch(process.env.REACT_APP_URL_API + "/technologies", {
                method: "POST",
                body: JSON.stringify(technologie)
            })
        })

    const [visibility, setVisibility] = useState(false);

    const pickerId = "technologie";


    function creerTechnologie(){
        mutation.mutate()
        annulerTechnologie()
        setReload((prev) => !prev)
    }

    function annulerTechnologie(){
        dispatch(resetTechnologie())
        toggleVisibility()
    }

    function toggleVisibility(){
        setVisibility((prev) => !prev)
    }

    return !visibility?
                <div className={"flex justify-between pl-3"}>
                    <BoutonNavigation id={"bouton-afficher-formulaire-creer-technologie"}
                                      contenu={"Créer une nouvelle technologie"}
                                      className={"w-fit border-b border-darkgray-500"}
                                      onclick={() => setVisibility((prev) => {return !prev})}
                                      imgSrc={"visualize_dark"}
                                      imgFormat={"16"}/>
                </div>
                :<section id={"formulaire-creer-technologie"}>
                        <TitreFormulaire titre={"Créer une nouvelle technologie"}
                                         messageInfo={"Ajoutez une nouvelle technologie lorsque celle-ci n'existe pas dans la liste."}/>
                        <div className="ml-3">
                            <InputText name={"libelle"}
                                       libelle={"Libellé"}
                                       value={technologie.libelle}
                                       className={"max-w-96"}
                                       onChange={(e) => {dispatch(setTechnologie(e))}}/>
                            <InputText name={"lienDoc"}
                                       libelle={"Lien à la documentation"}
                                       value={technologie.lienDoc}
                                       className={"max-w-xl"}
                                       onChange={(e) => {dispatch(setTechnologie(e))}}/>
                            <ColorPicker id={pickerId}
                                         name={"codeCouleur"}
                                         libelle={"Code couleur"}
                                         value={technologie.codeCouleur}
                                         dispatch={(e) => dispatch(setCodeCouleur(e))}/>
                        </div>

                        <div className="flex pt-3">
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
}