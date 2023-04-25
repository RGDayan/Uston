import React from "react";

export default function BtnDelete({ id, object }){
    return (
        <button id={"ask-deletion" + id}
                className={"px-3 bg-red-600 rounded-bl-md"}>
            Supprimer
        </button>
    )
}