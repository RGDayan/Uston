import React, {useState} from "react";
import ModalDelete from "../form/projets/modaldelete";
import BtnDeleteEtiquette from "./btndeleteetiquette";
import {adresse_api} from "../../../controllers/environment/api";

export default function EtiquetteObjet({value, name, url, setReload}){
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

    function handleOpenModal(e) {
        e.preventDefault();
        setIsModalDeleteOpen(true)
    }

    return (
        <>
            <li className={"relative flex mr-1 p-1 overflow-hidden"}
                style={{backgroundColor : value.codeCouleur,
                        boxShadow : "0px 1px 10px -1px " + value.codeCouleur}}>
                {value.libelle}
                <BtnDeleteEtiquette value={value} handleOpenModal={handleOpenModal}/>
            </li>

            <ModalDelete open={isModalDeleteOpen}
                         titre={"Confirmer la suppression de la " + name}
                         libelleConfirmation={"Êtes-vous réellement certain de vouloir supprimer la " + name + " \"" + value.libelle + "\""}
                         url={adresse_api + url + value.id}
                         value={value}
                         onClose={() => setIsModalDeleteOpen(false)}
                         setReload={setReload}
                         doNavAfterAction={false}/>
        </>
    )
}