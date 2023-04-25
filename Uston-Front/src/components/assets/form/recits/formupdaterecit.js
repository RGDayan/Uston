import React from "react";
import Input from "../../miscellaneous/input";
import TextArea from "../../miscellaneous/textarea";
import InputSubmit from "../../miscellaneous/inputsubmit";
import ListObjets from "../../miscellaneous/listobjets";
import ConteneurTag from "../../miscellaneous/conteneurtag";
import Titre from "../../miscellaneous/titre";
import {adresse_api} from "../../../../controllers/environment/api";

export default function FormUpdateRecit({recit, setRecit, setRecitsReload}){
    function handle(e){
        setRecit(
            {...recit, [e.target.name]: e.target.value}
        );
    }

    async function submit(e){
        e.preventDefault();
        const newData = {
            id: recit.id,
            projet_id: recit.id,
            titre: recit.titre,
            description: recit.description,
            created_at: recit.created_at
        };

        await fetch(adresse_api + "/recits-utilisateur/" + recit.id,
            {
                method: "PUT",
                body: JSON.stringify(newData)
            })
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                setRecit(res);
            })

        setRecitsReload((prev) => {return !prev});
    }

    return (
        <form className={"w-full md:w-1/2"} onSubmit={submit}>
            <Titre text={"RECIT N°" + recit.id + " : " + recit.titre}/>
            <Input id={"titre-recit"}
                   name={"titre"}
                   value={recit.titre}
                   label={"Titre"}
                   onChange={handle}/>
            <TextArea id={"description"}
                      name={"description"}
                      value={recit.description}
                      size={"w-3/4 h-32"}
                      label={"Description"}
                      onChange={handle}/>
            <ConteneurTag label={"Categories"}>
                <ListObjets values={recit.categories}
                            valueRel={recit}
                            typeObjet={"relation"}
                            nomObjet={"Categorie"}
                            urlDelete={"/recits-utilisateur-remove-categorie"}
                            setReload={setRecitsReload}/>
            </ConteneurTag>
            <InputSubmit id={"update-recit"}
                         value={"Valider"}/>
        </form>
    )
}