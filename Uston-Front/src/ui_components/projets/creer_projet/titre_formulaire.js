import React from "react";

export default function TitreFormulaire({titre, messageInfo}){
    return (
        <div className={"p-2"}>
            <h1 id={"titre-creer-projet"}
                className={"  text-xl font-bold"}>
                {titre}
            </h1>
            <p className={"w-fit text-xs text-darkgray-400 border-t border-darkgray-500"}>
                {messageInfo}
            </p>
        </div>
    )
}