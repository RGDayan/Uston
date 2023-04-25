import React, {useState} from "react";
import GetImgByFormat from "../../../../controllers/assets/imgcontroller";
import ModalDelete from "../projets/modaldelete";
import {useParams} from "react-router-dom";
import {adresse_api} from "../../../../controllers/environment/api";

export default function FormDeleteSuggestion({suggestion}){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const params = useParams();

    return (
        <>
            <button id={"btn-delete-suggestion"}
                    className={"p-2 hover:bg-btn-hover active:bg-cst-darkgray-700"}
                    onClick={() => setIsModalOpen(true)}>
                <img src={GetImgByFormat("trash", "16")} alt={"icon-trash"} />
            </button>
            <ModalDelete open={isModalOpen}
                         titre={"Confirmer la suppression de la suggestion"}
                         libelleConfirmation={"Êtes-vous réellement certain de vouloir supprimer la suggestion n°" + suggestion.id + " : \"" + suggestion.titre + "\" ?"}
                         url={adresse_api + "/suggestions/" + suggestion.id}
                         value={suggestion}
                         onClose={() => {
                             setIsModalOpen(false);
                             console.log(isModalOpen);
                         }}
                         doNavAfterAction={true}
                         navAfterAction={"/index-projets/show-projet/" + params.idProjet + "/index-suggestions"}/>
        </>
    )
}