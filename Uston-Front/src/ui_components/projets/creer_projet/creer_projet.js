import React, {useState} from "react";
import NavigationCreerProjet from "./navigation_creer_projet";
import {projetTemplate} from "../../../controllers/objets/projet";

export default function CreerProjet(){
    const [projet, setProjet] = useState(projetTemplate);

    function handle(e){
        // setProjet((prev) => {
        //     prev[e.target.name] = e.target.value
        // })
        // console.log(projet);
    }

    return (
        <div className={"w-full"}>
            <NavigationCreerProjet />

            <section id={"formulaire-creer-projet"}
                     className={"ml-5 w-1/2 "}>
                <h1 id={"titre-creer-projet"}
                    className={"p-2 text-xl font-bold border-b border-darkgray-500"}>
                    Nommer votre projet
                </h1>
                <p className={"text-xs text-darkgray-400"}>Attention : Le projet sera créé seulement à la confirmation des 3 formulaires</p>

                <div id={"formulaire-projet"}
                     className={"m-3"}>
                    <div className={"flex flex-col"}>
                        <label id={"label-titre"}
                               className={"text-sm"}>
                            Titre
                        </label>
                        <input name={"titre-projet"}
                               type={"text"}
                               className={"pl-1 bg-darkgray-700 outline-none"}
                               onChange={(e) => handle(e)}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}