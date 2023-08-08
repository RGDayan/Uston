import React from "react";

export default function TitreFormulaireCreerProjet({titre, messageInfo}){
    return (
        <div className={"p-2"}>
            <h1 id={"titre-creer-projet"}
                className={"py-2  text-xl font-bold border-b border-darkgray-500"}>
                {titre}
            </h1>
            <p className={"text-xs text-darkgray-400"}>
                {messageInfo}
            </p>
        </div>
    )
}