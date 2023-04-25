import React, {useEffect, useState} from "react";
import Titre from "../../miscellaneous/titre";
import InputSubmit from "../../miscellaneous/inputsubmit";
import {technologiesTemplate} from "../../../../controllers/objets/technologie";
import {adresse_api} from "../../../../controllers/environment/api";

export default function FormAddTechnologie({projet, setProjetReload, reloadTechnologies}){
    const [technologies, setTechnologies] = useState(technologiesTemplate);
    const [id, setId] = useState(0);

    function handle(e){
        setId(e.target.value);
        console.log(id);
    }

    async function submit(e){
        e.preventDefault();
        if (id === 0)
            return;
        let body = {
            technologie_id: id,
            projet_id: projet.id
        };
        await fetch(adresse_api + "/projet-add-technologie",
            {
                method: "POST",
                body: JSON.stringify(body)
            })

        setProjetReload((prev) => {return !prev});
    }

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
        <div className={"my-2"}>
            <Titre text={"Lier une technologie"}/>
            <form onSubmit={submit}>
                {
                    technologies !== technologiesTemplate ?
                        <>
                            <label className="flex mb-2 text-xs">Sélectionnez une technologie</label>
                            <select id="add-technologie"
                                    size="5"
                                    name={"id"}
                                    className={
                                        "w-full " +
                                        "p-1 pl-2 " +
                                        "bg-input-txt " +
                                        "border-2 border-border rounded-md " +
                                        "outline-0 "}
                                    onChange={handle}>
                                {
                                    technologies.map((technologie) => {
                                        return <option key={"technologie-" + technologie.id}
                                                       id={"option-technologie-" + technologie.id}
                                                       value={technologie.id}
                                                       className={"bg-input-txt text-white :bg-cst-darkgray-700"}>
                                            {technologie.libelle}
                                        </option>
                                    })
                                }
                            </select>
                            <InputSubmit id={"validate-technologie"}
                                         value={"Ajouter"}/>
                        </>
                        : "Aucune technologie existante"
                }
            </form>
        </div>
    )
}