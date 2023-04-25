import React from "react";
import GetImgByFormat from "../../../../controllers/assets/imgcontroller";

export default function FormCreateRecit({submit}){
    return (
        <form className={"relative flex  " +
            "justify-center align-middle " +
            "hover:bg-btn-hover active:bg-cst-darkgray-800"}
              onSubmit={submit}>

            <div className={"flex items-center ml-2"}>
                <img src={GetImgByFormat("plus_dark", 16)}
                     alt={"icon-plus"}/>
            </div>
            <input id={"create-recit"}
                   type={"submit"}
                   value={"Créer un nouveau récit"}
                   className={"px-1 py-2 "}/>
        </form>
    )
}