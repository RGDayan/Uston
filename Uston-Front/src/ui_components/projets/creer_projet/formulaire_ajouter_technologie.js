import React, {useEffect, useState} from "react";
import {technologiesTemplate} from "../../../controllers/objets/technologie";
import {adresse_api} from "../../../controllers/environment/api";
import BoutonNavigation from "../../divers/bouton_navigation";
import FormulaireCreerTechnologie from "./formulaire_creer_technologie";

export default function FormulaireAjouterTechnologie({selectedTech, setSelectedTech, submitProjet}){
    const [listeTechnologies, setListeTechnologies] = useState(technologiesTemplate);
    const [ajouterId, setAjouterId] = useState(0);
    const [retirerId, setRetirerId] = useState(0);
    const [reloadListe, setReloadListe] = useState(false);
    const [visibiliteFormCreerTechno, setVisibiliteFormCreerTechno] = useState(false);

    useEffect(() => {
        fetch(adresse_api + "/technologies")
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                setListeTechnologies(res)
            })
    }, [reloadListe]);

    function ajouterTechnologie(){
        if (selectedTech.includes(ajouterId) || ajouterId === 0)
            return;

        setSelectedTech((prev) => [...prev,
            ajouterId
        ]);
        setReloadListe((prev) => !prev);
    }

    function handleAjouter(e){
        setAjouterId(e.target.value);
    }

    function retirerTechnologie(){
        setSelectedTech((prev) => {
            return prev.filter((x) => x !== retirerId.toString());
        })
    }

    function handleRetirer(e){
        setRetirerId(e.target.value);
    }

    function toggleFormulaireCreerTechnologie(){
        setVisibiliteFormCreerTechno((prev) => !prev);
    }

    return (
        <section id={"formulaire-technologies"}
                 className={"m-3 w-full"}>
            <div className={"flex w-full justify-evenly"}>
                {
                    listeTechnologies !== technologiesTemplate ?
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
                                    listeTechnologies.map((technologie) => {
                                        if (!selectedTech.includes(technologie.id.toString())){
                                            return <option key={"technologie-" + technologie.id}
                                                           id={"option-technologie-" + technologie.id}
                                                           value={technologie.id}
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
                        : "Aucune technologie existante"
                }
                {
                    listeTechnologies !== technologiesTemplate ?
                        <div className={"w-1/2"}>
                            <label className="text-sm">Technologies sélectionnées</label>
                            <select id="select-technologies"
                                    size="5"
                                    name={"technologie_id"}
                                    className={
                                        "w-full " +
                                        "p-1 pl-2 " +
                                        "bg-darkgray-700 " +
                                        "outline-0 "}
                                    onChange={handleRetirer}>
                                {
                                    listeTechnologies.map((technologie) => {
                                        if (selectedTech.includes(technologie.id.toString())){
                                            return <option key={"technologie-" + technologie.id}
                                                           id={"option-technologie-" + technologie.id}
                                                           value={technologie.id}
                                                           onDoubleClick={retirerTechnologie}>
                                                {technologie.libelle}
                                            </option>
                                        }
                                        return "";
                                    })
                                }
                            </select>
                            <BoutonNavigation id={"bouton-retirer-technologie"}
                                              contenu={"Retirer"}
                                              className={"w-fit "}
                                              onclick={retirerTechnologie}
                                              imgSrc={"plus_dark"}
                                              imgFormat={"16"}/>
                        </div>
                        : "Aucune technologie existante"
                }
            </div>

            {
                visibiliteFormCreerTechno?
                    <FormulaireCreerTechnologie setReloadListe={setReloadListe}
                                                toggleVisibilite={toggleFormulaireCreerTechnologie} />:
                    <div className={"flex justify-between"}>
                        <BoutonNavigation id={"bouton-afficher-formulaire-creer-technologie"}
                                          contenu={"Créer une nouvelle technologie"}
                                          className={"w-fit border-b border-darkgray-500"}
                                          onclick={toggleFormulaireCreerTechnologie}
                                          imgSrc={"visualize_dark"}
                                          imgFormat={"16"}/>
                        <BoutonNavigation id={"bouton-valider-projet"}
                                          contenu={"Valider le projet"}
                                          className={"w-fit border-b border-darkgray-500"}
                                          onclick={submitProjet}/>
                    </div>
            }
        </section>
    )
}