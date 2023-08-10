import React from "react";

export default function TitreFormulaireCreerProjet({titre, messageInfo}){
    return (
        <div className={"p-2"}>
            <h1 id={"titre-creer-projet"}
                className={"py-2  text-xl font-bold"}>
                {titre}
            </h1>
            <p className={"w-fit text-xs text-darkgray-400 border-t border-darkgray-500"}>
                {messageInfo}
            </p>
        </div>
    )
}