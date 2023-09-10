import React from "react";
import TitreFormulaire from "./titre_formulaire";
import InputText from "../../divers/inputs/input_text";
import {removeCategorieProjet, resetProjet, setProjet, setProjetPropriete} from "../../../redux/projets/projet_slicer";
import InputTextArea from "../../divers/inputs/input_textarea";
import ListeTags from "../../divers/tags/liste_tags";
import {removeTechnologieProjet} from "../../../redux/technologies/technologies_slicer";
import BoutonNavigation from "../../divers/navigations/bouton_navigation";
import {useDispatch, useSelector} from "react-redux";
import {selectProjet, selectTechnologies} from "../../../redux/selectors";
import {useNavigate} from "react-router";

export default function FormulaireCreerProjet(){
    const projet = useSelector(selectProjet)
    const dispatch = useDispatch()
    const technologies = useSelector(selectTechnologies)
    const navigate = useNavigate();

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

            dispatch(resetProjet())
            navigate("/index-projets")
        }
    }

    return (
        <section id={"section-creer-projet"}
                 className={"pl-5 w-1/2 border-r border-darkgray-500 "}>
            <TitreFormulaire titre={"Créez votre projet"}
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
    )
}