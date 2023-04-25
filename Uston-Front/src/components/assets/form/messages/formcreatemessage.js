import React, {useState} from "react";
import TextArea from "../../miscellaneous/textarea";
import InputSubmit from "../../miscellaneous/inputsubmit";
import {messageTemplate} from "../../../../controllers/objets/message";
import HorizontalSeparator from "../../miscellaneous/horizontalseparator";
import InfoContenu from "../../miscellaneous/infocontenu";
import {adresse_api} from "../../../../controllers/environment/api";

export default function FormCreateMessage({suggestion, setReload, setVisibility}){
    const [message, setMessage] = useState({
        ...messageTemplate,
        suggestion_id: suggestion.id
    });

    async function submit(e){
        e.preventDefault();
        setMessage({
            ...message,
            created_at: new Date(Date.now()).toISOString()
        })

        await fetch(adresse_api + "/messages",
            {
                method: "POST",
                body: JSON.stringify(message)
            })

        setReload((prev) => {return !prev});
        setVisibility(false);
    }

    function handle(e){
        setMessage({
            ...message,
            [e.target.name] : e.target.value
        });
    }

    return (
        <>
            <HorizontalSeparator />
            <form id={"form-create-message"}
                  className={"m-1 p-2 " +
                      "bg-cst-darkgray-900 rounded-md mt-5 mb-32"}
                  onSubmit={submit}>
                <TextArea id={"contenu-message"}
                          name={"contenu"}
                          label={"Contenu du nouveau message"}
                          value={""}
                          size={"w-full"}
                          flexDir={"flex-col"}
                          onChange={handle}/>

                <div className="relative w-full ">
                    <InputSubmit id={"create-message"}
                                 value={"Envoyer"} />
                    <div className={"static xl:absolute text-center top-3 right-0 text-gray-500"}>
                        {/*TODO Ajouter le pseudo de l'utilisateur connecté car il n'est pas encore lié au message existant*/}
                        <InfoContenu objet={message}/>
                    </div>
                </div>
            </form>
        </>
    )
}