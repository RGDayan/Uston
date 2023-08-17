import React from "react";
import NavigationCreerProjet from "./navigation_creer_projet";
import TitreFormulaireCreerProjet from "./titre_formulaire_creer_projet";
import InputText from "../../divers/inputs/input_text";
import InputTextArea from "../../divers/inputs/input_textarea";
import BoutonNavigation from "../../divers/boutons/bouton_navigation";
import {useDispatch, useSelector} from "react-redux";
import {selectProjet, selectTechnologies} from "../../../redux/selectors";
import {removeCategorieProjet, setProjet, setProjetPropriete} from "../../../redux/projets/projet_slicer";
import FormulaireAjouterCategorie from "./formulaire_ajouter_categorie";
import FormulaireAjouterTechnologie from "./formulaire_ajouter_technologie";
import ListeTags from "../../divers/tags/liste_tags";
import {useNavigate} from "react-router";
import {removeTechnologieProjet} from "../../../redux/technologies/technologies_slicer";

export default function CreerProjet(){
    const projet = useSelector(selectProjet)
    const technologies = useSelector(selectTechnologies)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    async function createProjet() {
        if (projet.titre !== "" && projet.description !== ""  && projet.besoin !== ""){
            const resultProjet = await fetch(process.env.REACT_APP_URL_API + "/projets" , {
                method: "POST",
                body: JSON.stringify(projet)
            }) .then(async (res) => {
                const resultat = await res.json()
                dispatch(setProjet(resultat))
                return resultat
            })

            console.log("Appel Projet", resultProjet)

            if (resultProjet){
                const body = {
                    projet_id: resultProjet.id,
                    technologies_id: []
                }
                technologies.map((tech) => {
                    body.technologies_id.push(tech.id)
                })

                const resultTechnologies = await fetch(process.env.REACT_APP_URL_API + "/projet-add-technologies", {
                    method: "POST",
                    body: JSON.stringify(body)
                }).then(async (res) => {
                    return await res.json()
                })

                console.log("Appel Tech", resultTechnologies)

            }

            navigate("/index-projets")
        }
    }

    return (
        <div className={"w-full"}>
            <NavigationCreerProjet />

            <div className="flex">

                <section id={"section-creer-projet"}
                         className={"pl-5 w-1/2 border-r border-darkgray-500 "}>
                    <TitreFormulaireCreerProjet titre={"Créez votre projet"}
                                                messageInfo={"Attention : Le projet sera uniquement créé si ses champs sont renseignés."}/>

                    <div id={"formulaire-projet"}
                         className={"p-3 pr-10"}>
                        <InputText libelle={"Titre"}
                                   name={"titre"}
                                   value={projet.titre}
                                   onChange={(e) => dispatch(setProjetPropriete(e))}/>
                        <InputText libelle={"Description"}
                                   name={"description"}
                                   value={projet.description}
                                   onChange={(e) => dispatch(setProjetPropriete(e))}/>
                        <InputTextArea libelle={"Besoin"}
                                       name={"besoin"}
                                       value={projet.besoin}
                                       rows={6}
                                       onChange={(e) => dispatch(setProjetPropriete(e))}/>
                        <ListeTags libelle={"Categories"}
                                   name={"categorie"}
                                   type={"categorie"}
                                   objets={projet.categories}
                                   action={removeCategorieProjet}/>
                        <ListeTags libelle={"Technologies"}
                                   name={"technologie"}
                                   type={"technologie"}
                                   objets={technologies}
                                   action={removeTechnologieProjet}/>
                    </div>

                    <div className={"flex justify-center mt-2"}>
                        <BoutonNavigation id={"bouton-valider-projet"}
                                          contenu={"Valider"}
                                          className={"w-fit border-b border-darkgray-500"}
                                          onclick={() => createProjet()}
                                          imgSrc={"plus_dark"}
                                          imgFormat={"16"}/>
                    </div>

                </section>

                <section id="section-relation-projet"
                         className="w-1/2">

                    <FormulaireAjouterCategorie/>

                    <FormulaireAjouterTechnologie/>

                </section>
            </div>
        </div>
    )
}