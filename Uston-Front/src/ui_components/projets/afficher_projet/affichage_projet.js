import React from "react";
import NavigationProjet from "./navigation_projet";
import {Outlet} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {selectNavProjetID} from "../../../redux/selectors";
import {useQuery} from "react-query";
import {setProjet} from "../../../redux/projets/projet_slicer";

export default function AffichageProjet(){
    const projetId = useSelector(selectNavProjetID)
    const dispatch = useDispatch()

    useQuery(
        "projet_show",
        async () => {
            return fetch(process.env.REACT_APP_URL_API + "/projets/" + projetId)
                .then(async (res) => {
                    const resultat = await res.json()
                    dispatch(setProjet(resultat))
                    return resultat
                })
        }
    )

    return (
        <section className={"flex h-full"}>
            <NavigationProjet />
            <div className="flex w-full flex-col overflow-auto">
                <Outlet></Outlet>
            </div>
        </section>
    )
}