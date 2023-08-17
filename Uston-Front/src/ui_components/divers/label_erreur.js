import React from "react";

export default function LabelErreur({error}){
    return (
        <p className={"text-xs text-red-600 text-bold"}>
            {error}
        </p>
    )
}