import React from "react";
import GetImgByFormat from "../../../../controllers/assets/imgcontroller";
import {suggestionTemplate} from "../../../../controllers/objets/suggestion";
import {useNavigate, useParams} from "react-router-dom";
import {adresse_api} from "../../../../controllers/environment/api";

export default function FormCreateSuggestion(){
    const navigate = useNavigate();
    const params = useParams();

    function submit(e){
        e.preventDefault();
        const newSuggestion = {
            ...suggestionTemplate,
            projet_id: params.idProjet,
            createdAt: new Date(Date.now()).toISOString()
        };

        fetch(adresse_api + "/suggestions",
            {
                method: "POST",
                body: JSON.stringify(newSuggestion)
            })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                navigate("/index-projets/show-projet/" + params.idProjet + "/index-suggestions/" + res.id);
            })
    }

    return (
        <form className={"relative flex  " +
            "justify-center align-middle " +
            "hover:bg-btn-hover active:bg-cst-darkgray-800"}
              onSubmit={submit}>

            <button type={"submit"}
                    className={"p-2 hover:bg-btn-hover active:bg-cst-darkgray-700"}
                    title={"Créer une nouvelle suggestion"}>
                <img src={GetImgByFormat("plus_dark", 16)}
                     alt={"icon-plus"}/>
            </button>
        </form>
    )
}