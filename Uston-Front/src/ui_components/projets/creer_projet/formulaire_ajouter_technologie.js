// noinspection EqualityComparisonWithCoercionJS

import React, {useEffect, useState} from "react";
import BoutonNavigation from "../../divers/boutons/bouton_navigation";
import FormulaireCreerTechnologie from "./formulaire_creer_technologie";
import TitreFormulaireCreerProjet from "./titre_formulaire_creer_projet";
import {useMutation} from "react-query";
import {useDispatch, useSelector} from "react-redux";
import {selectTechnologies} from "../../../redux/selectors";
import {ajouterTechnologieProjet} from "../../../redux/technologies/technologies_slicer";

export default function FormulaireAjouterTechnologie(){
    const technologies = useSelector(selectTechnologies);
    const dispatch = useDispatch();
    const [reload, setReload] = useState(false);
    let id = 0;

    const mutation = useMutation(
        'technologie_index', async () => {
            return await fetch(process.env.REACT_APP_URL_API + "/technologies")
                .then(async (res) => {
                    return await res.json()
                })
        })
    const { data: technologiesBD } = mutation

    useEffect(() => {
        mutation.mutate()
    }, [reload]);

    function handleAjouter(e){
        id = e.target.value;
    }

    function ajouterTechnologie(){
        if (id === 0)
            return

        const technologie = technologiesBD.find((tech) => tech.id == id)
        dispatch(ajouterTechnologieProjet(technologie))
        id = 0
    }

    return (
        <>
            <TitreFormulaireCreerProjet titre={"Ajoutez vos technologies"}
                                        messageInfo={"Les technologies sont celles utilisées dans votre projet. " +
                                            "Vous pourrez les utiliser en tant que Tag"}/>

            <section id={"formulaire-technologies"}
                     className={"pl-3 w-full"}>
                    {
                        technologiesBD?.length !== 0 ?
                            <div className={"w-1/2"}>
                                <label className="text-sm">Technologies</label>
                                <select id="select-technologies"
                                        size="5"
                                        name={"technologie_id"}
                                        className={
                                            "w-full " +
                                            "p-1 pl-2 " +
                                            "bg-darkgray-700 " +
                                            "outline-0 "}
                                        onChange={handleAjouter}>
                                    {
                                        technologiesBD?.map((technologie) => {
                                            if (!technologies?.includes(technologie)){
                                                return <option key={"technologie-" + technologie.id}
                                                               id={"option-technologie-" + technologie.id}
                                                               value={technologie.id}
                                                               className={"mb-1"}
                                                               style={{
                                                                   backgroundColor: technologie.codeCouleur,
                                                                   boxShadow: "0px 3px 10px -2px " + technologie.codeCouleur
                                                               }}
                                                               onDoubleClick={ajouterTechnologie}>
                                                    {technologie.libelle}
                                                </option>
                                            }
                                            return "";
                                        })
                                    }
                                </select>
                                <BoutonNavigation id={"bouton-ajouter-technologie"}
                                                  contenu={"Ajouter"}
                                                  className={"w-fit "}
                                                  onclick={ajouterTechnologie}
                                                  imgSrc={"plus_dark"}
                                                  imgFormat={"16"}/>
                            </div>
                            : <div className={"p-3"}>
                                <p className={"font-bold text-lg"}>Aucune technologie existante</p>
                                <p >Créez une nouvelle technologie si besoin</p>
                            </div>
                    }
            </section>
            <FormulaireCreerTechnologie setReload={setReload}/>
        </>
    )
}