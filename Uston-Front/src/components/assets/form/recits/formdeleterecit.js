import React, {useState} from "react";
import GetImgByFormat from "../../../../controllers/assets/imgcontroller";
import ModalDelete from "../projets/modaldelete";
import {adresse_api} from "../../../../controllers/environment/api";

export default function FormDeleteRecit({recit, setRecitsReload}){
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button id={"btn-delete-recit"}
                    className={"p-2 hover:bg-btn-hover active:bg-cst-darkgray-700"}
                    onClick={() => setIsModalOpen(true)}>
                <img src={GetImgByFormat("trash", "16")} alt={"icon-trash"} />
            </button>
            <ModalDelete open={isModalOpen}
                         titre={"Confirmer la suppression du récit utilisateur"}
                         libelleConfirmation={"Êtes-vous réellement certain de vouloir supprimer le récit utilisateur n°" + recit.id + " : \"" + recit.titre + "\" ?"}
                         url={adresse_api + "/recits-utilisateur/" + recit.id}
                         value={recit}
                         onClose={() => setIsModalOpen(false)}
                         setReload={setRecitsReload}
                         doNavAfterAction={true}
                         navAfterAction={"/index-projets/show-projet/" + recit.projet.id + "/index-recits"}/>
        </>
    )
}