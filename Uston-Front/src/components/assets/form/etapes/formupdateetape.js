import React, {useState} from "react";
import InputSubmit from "../../miscellaneous/inputsubmit";
import VerticalSeparator from "../../miscellaneous/verticalseparator";
import HorizontalSeparator from "../../miscellaneous/horizontalseparator";
import TextAreaEtape from "../../miscellaneous/textareaetape";
import {adresse_api} from "../../../../controllers/environment/api";

export default function FormUpdateEtape({etape, setRecitReload, children}){
    const [currentEtape, setEtape] = useState(etape);

    function handle(e){
        setEtape(
            {
                ...currentEtape, [e.target.name]: e.target.value
            })
        console.log(currentEtape)
    }

    function submit(e){
        e.preventDefault();

        fetch(adresse_api + "/etapes/" + currentEtape.id, {
                method: "PUT",
                body: JSON.stringify(currentEtape)
            })
            .then(() => {
                setRecitReload((prev) => {return !prev})
            })
    }

    return (
        <div className={"relative flex w-full"}>
            {children}
            <form key={"form-update-etape-" + currentEtape.id}
                  onSubmit={submit}
                  className={"flex flex-col " +
                      "w-full " +
                      "m-1 p-2 " +
                      "bg-cst-darkgray-900 rounded-md"}>

                <div className={"flex " +
                    "w-full " +
                    "pb-1 " +
                    "items-center justify-center"}>
                    <label htmlFor="en-tant-que-etape" className={"text-center"}>En tant que :</label>
                    <input id={"en-tant-que-etape"}
                           name={"en_tant_que"}
                           type={"text"}
                           className={"ml-2 px-2 " +
                               "bg-input-txt " +
                               "border border-cst-darkgray-700 rounded-md outline-0" }
                           onChange={handle}
                           defaultValue={currentEtape.en_tant_que}/>
                </div>

                <HorizontalSeparator />

                <div className={"flex " +
                    "w-full h-full mb-1"}>
                    <TextAreaEtape name={"situation"}
                                   value={currentEtape.situation}
                                   label={"Situation"}
                                   handle={handle}/>
                    <VerticalSeparator verticalMargin={""}/>
                    <TextAreaEtape name={"resultat"}
                                   value={currentEtape.resultat}
                                   label={"Résultat"}
                                   handle={handle}/>
                </div>

                <InputSubmit id={"update-recit-" + currentEtape.id} value={"Valider"}/>

            </form>
        </div>
    )
}