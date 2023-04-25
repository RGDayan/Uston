import React, {useState} from "react";
import BtnOption from "../btnoption";
import ModalDelete from "../../form/projets/modaldelete";
import {adresse_api} from "../../../../controllers/environment/api";

export default function NavProjet({projet, setIndexProjetReload}) {
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

    return (
        <nav className={
            "absolute flex  " +
            "w-full h-8 " +
            "justify-between"}>
            <div className={"flex  " +
                "items-center " +
                "h-full " +
                "bg-cst-darkgray-700"}>
                <BtnOption id={"Resume"}
                           text={"Résumé"}
                           url={"/index-projets/show-projet/" + projet.id + "/resume"}/>
                <BtnOption id={"UserStories"}
                           text={"Récits Utilisateur"}
                           url={"/index-projets/show-projet/" + projet.id + "/index-recits"}/>
                <BtnOption id={"Suggestions"}
                           text={"Suggestions"}
                           url={"/index-projets/show-projet/" + projet.id + "/index-suggestions"}/>
                <BtnOption id={"Fichiers"}
                           text={"Fichiers"}
                           url={"/index-projets/show-projet/" + projet.id + "/fichiers"}/>
            </div>

            <button id={"btn-delete-projet"}
                    className={
                        "min-w-48 h-full " +
                        "px-3 " +
                        "bg-red-600 hover:bg-red-500 active:bg-red-700"}
                    onClick={() => setIsModalDeleteOpen(true)}>
                Supprimer ce projet
            </button>

            <ModalDelete open={isModalDeleteOpen}
                         titre={"Confirmer la suppression du projet"}
                         libelleConfirmation={"Êtes-vous réellement certain de vouloir supprimer le projet \"" + projet.titre + "\" ?"}
                         url={adresse_api + "/projets/" + projet.id}
                         value={projet}
                         onClose={() => setIsModalDeleteOpen(false)}
                         setReload={setIndexProjetReload}
                         doNavAfterAction={true}
                         navAfterAction={"/index-projets"}/>
        </nav>
    )
}