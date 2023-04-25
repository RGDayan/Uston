import React from "react";
import InputSubmit from "../miscellaneous/inputsubmit";

export default function FormDelete({id, onSubmit}) {
    return (
        <form method={"DELETE"}
              onSubmit={onSubmit}>
            <InputSubmit id={"delete-" + id}
                         value={"Supprimer"}
                         classesSupplementaires={"bg-cst-darkgray-800 "}/>
        </form>
    )
}