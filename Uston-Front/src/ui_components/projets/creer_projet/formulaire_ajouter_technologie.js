import React, {useEffect, useState} from "react";
import {technologiesTemplate} from "../../../controllers/objets/technologie";
import BoutonNavigation from "../../divers/bouton_navigation";
import FormulaireCreerTechnologie from "./formulaire_creer_technologie";
import TitreFormulaireCreerProjet from "./titre_formulaire_creer_projet";

export default function FormulaireAjouterTechnologie({projet, setProjet}){
    const [listeTechnologies, setListeTechnologies] = useState([]);
    const [ajouterId, setAjouterId] = useState(0);
    const [reloadListe, setReloadListe] = useState(false);
    const [visibiliteFormCreerTechno, setVisibiliteFormCreerTechno] = useState(false);

    useEffect(() => {
        fetch(process.env.REACT_APP_URL_API + "/technologies")
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                setListeTechnologies(res)
            })
    }, [reloadListe]);

    function ajouterTechnologie(){
        if (projet.technologies.includes(ajouterId) || ajouterId === 0) {
            return;
        }

        setProjet((prev) => {
            prev.technologies.push(ajouterId);
            return prev;
        });

        setReloadListe((prev) => !prev);
    }

    function handleAjouter(e){
        setAjouterId(e.target.value);
    }

    function toggleFormulaireCreerTechnologie(){
        setVisibiliteFormCreerTechno((prev) => !prev);
    }

    return (
        <>
            <TitreFormulaireCreerProjet titre={"Ajoutez vos technologies"}
                                        messageInfo={"Les technologies sont celles utilisées dans votre projet. " +
                                            "Vous pourrez les utiliser en tant que Tag"}/>

            <section id={"formulaire-technologies"}
                     className={"p-3 w-full"}>
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
                                            if (!projet.technologies.includes(technologie.id.toString())){
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
                    visibiliteFormCreerTechno?
                        <FormulaireCreerTechnologie setReloadListe={setReloadListe}
                                                    toggleVisibilite={toggleFormulaireCreerTechnologie} />
                        :<div className={"flex justify-between"}>
                            <BoutonNavigation id={"bouton-afficher-formulaire-creer-technologie"}
                                              contenu={"Créer une nouvelle technologie"}
                                              className={"w-fit border-b border-darkgray-500"}
                                              onclick={toggleFormulaireCreerTechnologie}
                                              imgSrc={"visualize_dark"}
                                              imgFormat={"16"}/>
                        </div>
                }
            </section>
        </>
    )
}