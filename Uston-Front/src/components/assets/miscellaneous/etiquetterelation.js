import React, {useState} from "react";
import BtnDeleteEtiquette from "./btndeleteetiquette";
import ModalDelete from "../form/projets/modaldelete";
import {technologieProjet} from "../../../controllers/objets/technologie";
import {categorieRecit} from "../../../controllers/objets/categorie";
import {adresse_api} from "../../../controllers/environment/api";

export default function EtiquetteRelation({value, valueRel, name, url = "", setReload, canDelete = true}){
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

    let body;
    let link;
    switch (name){
        case "Technologie":
            body = technologieProjet;
            body.projet_id = valueRel.id;
            body.technologie_id= value.id;
            link = value.lienDoc;
            break;
        case "Categorie":
            body = categorieRecit;
            body.rel_id = valueRel.id;
            body.categorie_id = value.id;
            break;
        default:
            break;
    }

    function handleOpenModal(e) {
        e.preventDefault();
        setIsModalDeleteOpen(true)
    }
    function handleCloseModal() {
        setIsModalDeleteOpen(false);
    }

    return (
        <>
            <a href={link}>
                <li className={"relative flex mr-1 p-1 overflow-hidden"}
                    style={{backgroundColor : value.codeCouleur,
                            boxShadow : "0px 1px 10px -1px " + value.codeCouleur}}>
                    {value.libelle}
                    {
                        canDelete ?
                            <BtnDeleteEtiquette value={value} handleOpenModal={handleOpenModal}/>
                            : <></>
                    }
                </li>
            </a>

            {
                canDelete ?
                    <ModalDelete open={isModalDeleteOpen}
                                 titre={"Confirmer la suppression de la " + name}
                                 libelleConfirmation={"Êtes-vous réellement certain de vouloir supprimer la " + name + " \"" + value.libelle + "\" ?"}
                                 url={adresse_api + url}
                                 body={body}
                                 value={value}
                                 onClose={handleCloseModal}
                                 setReload={setReload}
                                 doNavAfterAction={false}/>
                    : <></>
            }
        </>
    )

}