import React, {useState} from "react";
import Titre from "../../miscellaneous/titre";
import {useNavigate, useOutletContext} from "react-router-dom";
import TextArea from "../../miscellaneous/textarea";
import Input from "../../miscellaneous/input";
import InputSubmit from "../../miscellaneous/inputsubmit";
import {adresse_api} from "../../../../controllers/environment/api";

export default function FormCreateProjet(){
    const [setIndexProjetReload] = useOutletContext();
    const navigate = useNavigate();
    const [projet, setProjet]= useState({
        id: 0,
        titre: "",
        besoin: "",
        description: "",
        createdAt: ""
    });

    function handle(e){
        setProjet(
            {...projet, [e.target.name]: e.target.value}
        )
    }

    function submit(e) {
        e.preventDefault();
        const newData = {...projet, createdAt: new Date(Date.now()).toISOString()};
        setProjet(
            newData
        );

        fetch(adresse_api + "/projets",
            {
                method: "POST",
                body: JSON.stringify(newData)
            })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setProjet(res)
                setIndexProjetReload((prev) => {return !prev});
                navigate("/index-projets/show-projet/" + res.id + "/resume");
            })
    }

    return (
        <section className={"w-full"}>
            <Titre text={"Créer un nouveau projet"} />
            <form className={
                "flex flex-col " +
                "w-full " +
                "m-5"} onSubmit={submit}>
                <Input id={"titre-projet"}
                       name={"titre"}
                       label={"Titre"}
                       value={projet.titre}
                       onChange={handle}/>
                <Input id={"besoin-projet"}
                       name={"besoin"}
                       label={"Besoin"}
                       value={projet.besoin}
                       onChange={handle}/>
                <TextArea id={"description-projet"}
                          name={"description"}
                          label={"Description"}
                          value={projet.description}
                          type={"textarea"}
                          size={"min-w-96 w-2/3"}
                          onChange={handle}/>
                <InputSubmit id={"validate-projet"}
                             type={"submit"}
                             value={"Ajouter"} />
            </form>
        </section>
    )
}