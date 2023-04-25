import React, {useState} from "react";
import Titre from "../miscellaneous/titre";
import InputSubmit from "../miscellaneous/inputsubmit";
import {adresse_api} from "../../../controllers/environment/api";

export default function FormAddCategorie({value, setReload, urlEndpoint}){
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
            categorie_id: id,
            value_id: value.id
        };
        await fetch(adresse_api + urlEndpoint,
            {
                method: "POST",
                body: JSON.stringify(body)
            });

        setReload((prev) => {return !prev});
    }

    return (
        <div>
            <Titre text={"Ajouter une catégorie"}/>
            <form onSubmit={submit}>
                {
                    value.projet.categories.length !== 0 ?
                        <>
                            <label className="flex mb-2 text-xs">Sélectionnez une catégorie à ajouter</label>
                            <select id="add-categorie"
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
                                    value.projet.categories.map((categorie) => {
                                        return <option key={"categorie-" + categorie.id}
                                                       id={"option-categorie-" + categorie.id}
                                                       value={categorie.id}
                                                       className={"bg-input-txt text-white :bg-cst-darkgray-700"}>
                                            {categorie.libelle}
                                        </option>
                                    })
                                }
                            </select>
                            <InputSubmit id={"validate-categorie"}
                                         value={"Ajouter"}/>
                        </>
                        : "Aucune catégorie existante dans ce projet"
                }
            </form>
        </div>
    )
}