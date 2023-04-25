import React from "react";
import GetImgByFormat from "../../../../controllers/assets/imgcontroller";
import {etapeTemplate} from "../../../../controllers/objets/etape";
import {useParams} from "react-router-dom";
import {adresse_api} from "../../../../controllers/environment/api";

export default function FormCreateEtape({setRecitReload}){
    const params = useParams();

    async function submit(e){
        e.preventDefault();
        let newEtape = {
            ...etapeTemplate,
            recit_id: params.idRecit
        }

        await fetch(adresse_api + "/etapes",
            {
                method: "POST",
                body: JSON.stringify(newEtape)
            })
            .then(() => {
                setRecitReload((prev) => {return !prev});
            })
    }

    return (
        <form onSubmit={submit}>
            <button type={"submit"}
                    className={"p-2 hover:bg-btn-hover active:bg-cst-darkgray-700"}
                    title={"Créer une nouvelle étape"}>
                <img src={GetImgByFormat("plus_dark", 16)} alt={"icon-plus"}/>
            </button>
        </form>
    )
}