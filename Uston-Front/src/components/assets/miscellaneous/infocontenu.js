import React from "react";
import Label from "./label";

export default function InfoContenu({objet}){
    let date = new Date(objet.created_at);
    return (
        <>
            <Label text={"Ajouté le " + date.toLocaleDateString() + " à " + date.toLocaleTimeString()}
                   width={""}/>
            {/*TODO Ajouter le pseudo de l'auteur et un lien vers sa fiche perso*/}
            <Label text={"par Auteur"} />
        </>
    )
}