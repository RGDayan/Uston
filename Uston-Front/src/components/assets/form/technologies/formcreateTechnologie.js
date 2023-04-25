import React, {useState} from "react";
import Titre from "../../miscellaneous/titre";
import ColorPicker from "../../miscellaneous/colorpicker";
import Input from "../../miscellaneous/input";
import InputSubmit from "../../miscellaneous/inputsubmit";
import {technologieTemplate} from "../../../../controllers/objets/technologie";
import {adresse_api} from "../../../../controllers/environment/api";

export default function FormCreateTechnologie({projet, setProjetReload, setReloadTechnologies}){
    const [technologie, setTechnologie] = useState(technologieTemplate);
    const idPicker = "couleur-technologie";

    function handle(e){
        setTechnologie(
            {...technologie, [e.target.name]: e.target.value, projet_id: projet.id}
        )
    }
    async function submit(e){
        e.preventDefault();

        await fetch(adresse_api + "/technologies",
            {
                method: "POST",
                body: JSON.stringify(technologie)
            })
            .then((res) => {
                return res.json()
            })

        setTechnologie(technologieTemplate);

        let input = document.getElementById("input-"+idPicker);
        input.value = "";
        setProjetReload((prev) => {return !prev});
        setReloadTechnologies((prev) => {return !prev});
    }

    return(
        <div className={"my-2"}>
            <Titre text={"Ajouter des technologies"}/>
            <form onSubmit={submit} >
                <Input id={"libelle-technologie"}
                       name={"libelle"}
                       label={"Libellé"}
                       value={technologie.libelle}
                       onChange={handle}/>
                <ColorPicker id={idPicker}
                             name={"codeCouleur"}
                             label={"Code couleur"}
                             value={technologie.codeCouleur}
                             position={"bottom-0 right-12"}
                             state={technologie}
                             setState={setTechnologie}/>
                <Input id={"lien-doc-technologie"}
                       name={"lienDoc"}
                       label={"Lien à la documentation"}
                       value={technologie.lienDoc}
                       onChange={handle}/>
                <InputSubmit id={"validate-technologie"}
                             value={"Ajouter"}/>
            </form>
        </div>
    )
}