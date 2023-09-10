import React from "react";
import LienNavigation from "../../divers/navigations/lien_navigation";
import BoutonNavigation from "../../divers/navigations/bouton_navigation";
import {useDispatch} from "react-redux";
import {resetProjet} from "../../../redux/projets/projet_slicer";
import {useNavigate} from "react-router";

export default function NavigationIndexProjets(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function afficherFormCreerProjet(){
        dispatch(resetProjet())
        navigate("/creer-projet")
    }

    return (
        <div id={"navigation_index_projets"} className={"flex"}>
            <BoutonNavigation id={"lien_creer_projet"}
                              contenu={"Créer un projet"}
                              imgSrc={"plus_dark"}
                              imgFormat={"16"}
                              onclick={() => afficherFormCreerProjet()}
            />
            <LienNavigation id={"lien_afficher_parametres"}
                            lien={"/afficher-parametres"}
                            contenu={"Paramètres"}
                            imgSrc={"settings"}
                            imgFormat={"16"}/>
        </div>
    );
}