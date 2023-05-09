import React from "react";
import GetImgByFormat from "../../../../controllers/assets/imgcontroller";
import FormDeleteRecit from "../../form/recits/formdeleterecit";
import {useNavigate, useParams} from "react-router-dom";

export default function NavRecit({recit, setRecitsReload}){
    const params = useParams();
    const navigate = useNavigate();

    return (
        <nav className={"flex"}>
            <button type={"button"}
                    className={"p-2 hover:bg-btn-hover active:bg-cst-darkgray-700"}
                    onClick={() => {navigate("/index-projets/show-projet/" + params.idProjet + "/index-recits/" + params.idRecit + "/resume")}}>
                <img src={GetImgByFormat("home_dark", 16)} alt={"icon_home_dark"} />
            </button>
            <button type={"button"}
                    className={"p-2 hover:bg-btn-hover active:bg-cst-darkgray-700"}
                    onClick={() => {navigate("/index-projets/show-projet/" + params.idProjet + "/index-recits/" + params.idRecit + "/etapes")}}>
                <img src={GetImgByFormat("user_story", 16)} alt={"icon_user_story"} />
            </button>
            <FormDeleteRecit recit={recit} setRecitsReload={setRecitsReload}/>
        </nav>
    )
}