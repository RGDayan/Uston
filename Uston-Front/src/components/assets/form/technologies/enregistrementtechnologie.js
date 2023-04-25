import React, {useState} from "react";
import BtnDeleteEtiquette from "../../miscellaneous/btndeleteetiquette";
import ModalDelete from "../projets/modaldelete";
import {adresse_api} from "../../../../controllers/environment/api";

export default function EnregistrementTechnologie({technologie, setReloadTechnologies}){
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <tr key={"technologie" + technologie.id}>
            <td>{technologie.id}</td>
            <td>{technologie.libelle}</td>
            <td>{technologie.codeCouleur}</td>
            <td>{technologie.lienDoc}</td>
            <td>{
                technologie.Projet ?
                    technologie.Projet.length
                    : 0
            }</td>
            <td className={"flex justify-center"}>
                <BtnDeleteEtiquette value={technologie} handleOpenModal={() => setIsModalOpen(true)}/>
            </td>

            <ModalDelete value={technologie}
                         url={adresse_api + "/technologies/" + technologie.id}
                         name={"Technologie"}
                         setReload={setReloadTechnologies}
                         open={isModalOpen}
                         onClose={() => setIsModalOpen(false)}
                         titre={"Confirmer la suppression de la technologie"}
                         libelleConfirmation={"Êtes-vous réellement certain de vouloir supprimer la technologie \"" + technologie.libelle + "\" ?"}
                         doNavAfterAction={false}/>
        </tr>
    )
}