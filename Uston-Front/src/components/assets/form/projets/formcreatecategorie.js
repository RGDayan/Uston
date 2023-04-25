import React, {useState} from "react";
import Titre from "../../miscellaneous/titre";
import ColorPicker from "../../miscellaneous/colorpicker";
import Input from "../../miscellaneous/input";
import InputSubmit from "../../miscellaneous/inputsubmit";
import {adresse_api} from "../../../../controllers/environment/api";

export default function FormCreateCategorie({projet, setProjetReload}){
    const categorieTemplate = {
        id: 1,
        libelle: "",
        codeCouleur: "#dd0303",
        projet_id: 0
    };
    const [categorie, setCategorie] = useState(categorieTemplate);
    const idPicker = "couleur-categorie";

    function handle(e){
        setCategorie(
            {...categorie, [e.target.name]: e.target.value, projet_id: projet.id}
        )
    }

    async function submit(e){
        e.preventDefault();

        await fetch(adresse_api + "/categorie",
            {
                method: "POST",
                body: JSON.stringify(categorie)
            })
            .then((res) => {
                return res.json()
            })

        setCategorie(categorieTemplate);
        let input = document.getElementById("input-"+idPicker);
        input.value = "";
        setProjetReload((prev) => {return !prev});
    }

    return (
        <div className={"my-2"}>
            <Titre text={"Ajouter des catégories"}/>
            <form onSubmit={submit}>
                <Input id={"libelle-categorie"}
                       name={"libelle"}
                       label={"Libellé"}
                       value={categorie.libelle}
                       onChange={handle}/>
                <ColorPicker id={idPicker}
                             name={"codeCouleur"}
                             label={"Code couleur"}
                             value={categorie.codeCouleur}
                             position={"bottom-0 left-14"}
                             state={categorie}
                             setState={setCategorie}/>
                <InputSubmit id={"validate-categorie"}
                             value={"Ajouter"}/>
            </form>
        </div>
    )
}