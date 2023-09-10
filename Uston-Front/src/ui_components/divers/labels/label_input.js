import React from "react";

export default function LabelInput({libelle, name}){
    return (
        <label id={"label-" + name}
               className={"text-sm"}>
            {libelle}
        </label>
    )
}