import React from "react";
import MenuDeroulant from "../../divers/navigations/menu_deroulant";
import LienNavigation from "../../divers/navigations/lien_navigation";

export default function NavigationProjet(){
    return (
        <nav className={"h-full min-w-32 shadow-lg shadow-darkgray-700"}>
            <MenuDeroulant libelle={"Projet"}
                           name={"projet"}
                           iconeSrc={"project"}
                           estSelection={true}>
                <LienNavigation lien={"/projet/resume"}
                                contenu={"Resume"}/>
                <LienNavigation lien={"/projet/panification"}
                                contenu={"Planification"} />
            </MenuDeroulant>
        </nav>
    )
}