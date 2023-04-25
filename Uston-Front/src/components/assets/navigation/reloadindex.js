import React from "react";
import GetImgByFormat from "../../../controllers/assets/imgcontroller";
import {useNavigate} from "react-router-dom";

export default function ReloadIndex({setReload, url, rounded = "rounded-md", padding = "p-1", margin = "m-1"}){
    const navigate = useNavigate();

    function onClickReload(e){
        e.preventDefault();
        setReload((prev) => {return !prev});
        navigate(url);
    }

    return(

        <div className={"flex justify-center"}>
            <button id={"btn-index-reload"}
                    className={margin + " " + padding + " " + rounded + " hover:bg-btn-hover active:bg-cst-darkgray-700"}
                    onClick={onClickReload}>
                <img src={GetImgByFormat("refresh", 16)} alt={"icon_reload"}/>
            </button>
        </div>
    )
}