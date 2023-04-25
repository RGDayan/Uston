import React from "react";
import GetImgByFormat from "../../../../controllers/assets/imgcontroller";
import FormDeleteRecit from "../../form/recits/formdeleterecit";

export default function NavRecit({recit, submit, setRecitsReload}){
    return (
        <nav className={"flex"}>
            <form onSubmit={submit}>
                <button type={"submit"}
                        className={"p-2 hover:bg-btn-hover active:bg-cst-darkgray-700"}
                        title={"Créer un nouveau récit"}>
                    <img src={GetImgByFormat("plus_dark", 16)} alt={"icon-plus"}/>
                </button>
            </form>
            <FormDeleteRecit recit={recit} setRecitsReload={setRecitsReload}/>
        </nav>
    )
}