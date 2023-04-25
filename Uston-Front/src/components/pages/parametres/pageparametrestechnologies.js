import React, {useEffect, useState} from "react";
import Titre from "../../assets/miscellaneous/titre";
import GetImgByFormat from "../../../controllers/assets/imgcontroller";
import {technologiesTemplate} from "../../../controllers/objets/technologie";
import EnregistrementTechnologie from "../../assets/form/technologies/enregistrementtechnologie";
import {adresse_api} from "../../../controllers/environment/api";

export default function PageParametresTechnologies(){
    const [technologies, setTechnologies] = useState(technologiesTemplate);
    const [reloadTechnologies, setReloadTechnologies] = useState();

    useEffect(() => {
            fetch(adresse_api + "/technologies",{
                method: "GET"
            }).then((res) => {
                return res.json();
            }).then((res) => {
                setTechnologies(res)
            })
        }, [reloadTechnologies])

    return (
        <>
            <Titre text={"Technologies"} />
            {
                technologies !== technologiesTemplate ?
                    <table id={"table-technologies"}>
                        <thead>
                        <tr>
                            <td>ID</td>
                            <td>Libellé</td>
                            <td>Code couleur</td>
                            <td>Lien à la documentation</td>
                            <td>Nb de projets</td>
                            <td className={"flex justify-center"}>
                                <img src={GetImgByFormat("trash", 16)} alt={"icon_trash"}/>
                            </td>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            technologies.map((technologie) => {
                                return (
                                    <EnregistrementTechnologie technologie={technologie}
                                                               setReloadTechnologies={setReloadTechnologies}/>
                                );
                            })
                        }
                        </tbody>
                    </table>
                    : ""
                }
        </>
    )
}