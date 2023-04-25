import React, {useEffect, useState} from "react";
import NavBtn from "../navbtn";
import {adresse_api} from "../../../../controllers/environment/api";

export default function IndexProjets({indexProjetReload, setIndexProjetReload}){
    const [projets, setProjets] = useState([]);

    useEffect(() => {
        fetch(adresse_api + "/projets",
            {
                method: "GET"
            })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setProjets(res);
            })
    }, [indexProjetReload, setIndexProjetReload])

    return (
        <div className={
             "max-w-xs h-full " +
             "overflow-y-auto"}
             id={"index-projet"}>
            {
                projets.map((projet) => {
                    return <NavBtn key={projet.id}
                                   url={"/index-projets/show-projet/" + projet.id + "/resume"}
                                   imgSrc={""}
                                   alt={""}
                                   text={projet.titre}/>
                })
            }
        </div>
    )
}