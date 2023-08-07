import React, {useEffect, useState} from "react";
import {adresse_api} from "../../../controllers/environment/api";
import {NavLink} from "react-router-dom";
import NavigationIndexProjets from "./navigation_index_projets";

export default function IndexProjets(){
    const [projets, setProjets] = useState([]);

    function getProjets() {
        fetch(adresse_api + "/projets")
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setProjets(res);
            })
    }

    useEffect(() => {
        getProjets();
    }, []);


    return (
        <div>
            <NavigationIndexProjets />
            <div id={"index-projets"}
                 className={"flex flex-wrap " +
                     "w-full " +
                     "justify-center"}>
                {
                    projets.map((projet) => {
                        return <>
                            <NavLink to={"/index-projets/" + projet.id}
                                     className={"relative " +
                                        "flex flex-col " +
                                        "min-h-32 w-1/4 min-w-96 " +
                                        "m-3 p-4 " +
                                        "justify-between " +
                                        "bg-darkgray-900 rounded-lg"}>
                                <h3 id={"titre-projet-" + projet.id}
                                    className={"text-xl font-bold"}>{projet.titre}</h3>
                                <p id={"titre-description-" + projet.id}
                                   className={"text-sm"}>{projet.description}</p>
                                <p id={"titre-createdAt-" + projet.id}
                                   className={"text-darkgray-400 text-right text-xs"}>
                                    Date de création : {new Date(projet.createdAt).toLocaleDateString()}
                                </p>
                                <p id={"titre-id-" + projet.id}
                                   className={"absolute top-0 right-0 p-4 text-darkgray-400 text-right text-xs"}>
                                    ID : n°{ projet.id}
                                </p>
                            </NavLink>
                        </>
                    })
                }
            </div>
        </div>
    )
}