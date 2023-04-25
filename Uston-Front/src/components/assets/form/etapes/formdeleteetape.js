import React, {useState} from "react";
import GetImgByFormat from "../../../../controllers/assets/imgcontroller";
import ModalDelete from "../projets/modaldelete";
import {adresse_api} from "../../../../controllers/environment/api";

export default function FormDeleteEtape({etape, setRecitReload}){
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button id={"btn-delete-etape-" + etape.id}
                    className={"absolute top-2 right-2 p-2 rounded-md hover:bg-btn-hover active:bg-cst-darkgray-700"}
                    onClick={() => setIsModalOpen(true)}
                    type={"button"}>
                <img src={GetImgByFormat("trash", "16")} alt={"icon-trash"} />
            </button>
            <ModalDelete open={isModalOpen}
                         titre={"Confirmer la suppression de l'étape"}
                         libelleConfirmation={"Êtes-vous réellement certain de vouloir supprimer cette étape ?"}
                         url={adresse_api + "/etapes/" + etape.id}
                         value={etape}
                         onClose={() => setIsModalOpen(false)}
                         setReload={setRecitReload}
                         doNavAfterAction={false}/>
        </>
    )
}