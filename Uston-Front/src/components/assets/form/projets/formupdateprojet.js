import React from "react";
import ConteneurTag from "../../miscellaneous/conteneurtag";
import TextArea from "../../miscellaneous/textarea";
import InputSubmit from "../../miscellaneous/inputsubmit";
import Input from "../../miscellaneous/input";
import ListObjets from "../../miscellaneous/listobjets";
import {adresse_api} from "../../../../controllers/environment/api";

export default function FormUpdateProjet({projet, setProjet, setIndexProjetReload, setProjetReload}){
    function handle(e){
        setProjet(
            {...projet, [e.target.name]: e.target.value}
        )
        console.log(projet);
    }

    async function submit(e){
        e.preventDefault();

        let body = {
            id: projet.id,
            titre: projet.titre,
            besoin: projet.besoin,
            description: projet.description
        }

        await fetch(adresse_api + "/projets/" + projet.id,
            {
                method: "PUT",
                body: JSON.stringify(body)
            })
            .then((res) => {
                return res.json()
            })

        setIndexProjetReload((prev) => {return !prev});
        setProjetReload((prev) => {return !prev});
    }

    return (
        <form className={
            "flex flex-col " +
            "w-full " +
            "m-5"} onSubmit={submit}>
            <Input id={"titre-projet"}
                   name={"titre"}
                   label={"Titre"}
                   value={projet.titre}
                   size={"w-1/2 min-w-64"}
                   onChange={handle}/>
            <Input id={"besoin-projet"}
                   name={"besoin"}
                   label={"Besoin"}
                   value={projet.besoin}
                   size={"w-1/2 min-w-64"}
                   onChange={handle}/>
            <ConteneurTag label={"Technologies"}>
                <ListObjets values={projet.technologies}
                            valueRel={projet}
                            typeObjet={"relation"}
                            nomObjet={"Technologie"}
                            urlDelete={"/projet-remove-technologie"}
                            setReload={setProjetReload}/>
            </ConteneurTag>
            <ConteneurTag label={"Categories"}>
                <ListObjets values={projet.categories}
                            typeObjet={"objet"}
                            nomObjet={"Categorie"}
                            urlDelete={"/categories/"}
                            setReload={setProjetReload}/>
            </ConteneurTag>
            <TextArea id={"description-projet"}
                      name={"description"}
                      value={projet.description}
                      size={"min-w-96 w-2/3"}
                      label={"Description"}
                      onChange={handle}/>
            <InputSubmit id={"validate-projet"}
                         type={"submit"}
                         value={"Valider"} />
        </form>
    )
}