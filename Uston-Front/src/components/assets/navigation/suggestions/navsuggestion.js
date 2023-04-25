import React from "react";
import GetImgByFormat from "../../../../controllers/assets/imgcontroller";
import FormDeleteSuggestion from "../../form/suggestions/formdeletesuggestion";
import {useNavigate, useParams} from "react-router-dom";

export default function NavSuggestion({suggestion, toggleIsReadOnly, isReadOnly, setReload, toggleFormCreateVisibility}){
    const navigate = useNavigate();
    const params = useParams();

    return(
        <div className={"fixed w-full bg-background shadow-sm shadow-cst-darkgray-800 z-50"} >
            <button type={"button"}
                    className={"p-2 hover:bg-btn-hover active:bg-cst-darkgray-700"}
                    onClick={() => {navigate("/index-projets/show-projet/" + params.idProjet + "/index-suggestions")}}>
                <img src={GetImgByFormat("back_arrow", 16)} alt={"icon_back_arrow"} />
            </button>
            <button type={"button"}
                    className={"p-2 hover:bg-btn-hover active:bg-cst-darkgray-700"}
                    onClick={toggleFormCreateVisibility}>
                <img src={GetImgByFormat("plus_dark", 16)} alt={"icon_plus_dark"}/>
            </button>
            <button id={"btn-index-suggestion-reload"}
                    className={"m-1 p-1 rounded-md hover:bg-btn-hover active:bg-cst-darkgray-700"}
                    onClick={() => setReload((prev) => {return !prev;})}>
                <img src={GetImgByFormat("refresh", 16)} alt={"icon_reload"}/>
            </button>
            <button type={"button"}
                    name={"switch-read-only-suggestion"}
                    onClick={toggleIsReadOnly}
                    className={"p-2 hover:bg-btn-hover active:bg-cst-darkgray-700 " + (!isReadOnly ? "hidden": "visible")}>
                <img src={GetImgByFormat("pen", 16)} alt={"icon-pen"}/>
            </button>
            <FormDeleteSuggestion suggestion={suggestion}/>
        </div>
    )
}