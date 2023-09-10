import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectNavProjetID, selectProjet} from "../../../redux/selectors";
import {useQuery} from "react-query";
import {setProjet} from "../../../redux/projets/projet_slicer";
import Loader from "../../divers/loaders/loader";
import TitreFormulaire from "../creer_projet/titre_formulaire";
import ListeTags from "../../divers/tags/liste_tags";
import LabelInput from "../../divers/labels/label_input";

export default function ResumeProjet(){
    const projet = useSelector(selectProjet)
    const projetId = useSelector(selectNavProjetID)

    return projet.id !== projetId ?
        <div className="flex justify-center w-full pt-5">
            <Loader />
        </div>
        : <section className="pl-2 flex flex-col w-full">
            <TitreFormulaire titre={projet.titre} messageInfo={projet.description}/>
            <div className="p-3 w-1/2">
                <LabelInput libelle={"Besoin"} name={"besoin"}/>
                <div className={"pb-3 pl-2"}>
                    {projet.besoin}
                </div>

                <ListeTags name={"categories"}
                           libelle={"Categories"}
                           type={"categorie"}
                           objets={projet.categories}/>
                <ListeTags name={"technologies"}
                           libelle={"Technologies"}
                           type={"technologie"}
                           objets={projet.technologies}/>
            </div>
        </section>

}
