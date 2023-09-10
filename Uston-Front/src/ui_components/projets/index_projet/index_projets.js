import React from "react";
import NavigationIndexProjets from "./navigation_index_projets";
import {useQuery} from "react-query";
import Loader from "../../divers/loaders/loader";
import BoutonNavigation from "../../divers/navigations/bouton_navigation";
import {useDispatch} from "react-redux";
import {setProjetId} from "../../../redux/navigation/navigation_slicer";
import {useNavigate} from "react-router";

export default function IndexProjets(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data} = useQuery("projet_index", async() => {
        return await fetch(process.env.REACT_APP_URL_API + "/projets")
            .then(async (res) => await res.json())
    })

    return (
        <div>
            <NavigationIndexProjets />
            {
                !data ?
                    <div className="w-full flex justify-center">
                        <Loader />
                    </div>
                    :<div id={"index-projets"}
                         className={"flex flex-wrap " +
                             "w-full " +
                             "justify-center"}>
                        {
                            data.map((projet) => {
                                return (
                                    <BoutonNavigation key={projet.id}
                                                      id={"bouton-afficher-projet-" + projet.id}
                                                      onclick={() => {
                                                          dispatch(setProjetId(projet.id))
                                                          navigate("/projet/resume")
                                                      }}
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
                                    </BoutonNavigation>
                                )
                            })
                        }
                    </div>
            }
        </div>
    )
}