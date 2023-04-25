import React, {useState} from "react";
import NavBtn from "../../assets/navigation/navbtn";
import HorizontalSeparator from "../../assets/miscellaneous/horizontalseparator";
import {NavLink, Outlet, useNavigate} from "react-router-dom";
import IndexProjets from "../../assets/navigation/projets/indexprojets";
import GetImgByFormat from "../../../controllers/assets/imgcontroller";

export default function BriqueProjet(){
    const [indexProjetReload, setIndexProjetReload] = useState(true);
    const navigate = useNavigate();

    function onClickReload(e){
        e.preventDefault();
        setIndexProjetReload((prev) => {return !prev});
        navigate("/index-projets")
    }

    return (
        <div className={
            "flex  " +
            "h-full " +
            "overflow-x-hidden"}>
            <nav className={
                "flex flex-col " +
                "w-fit min-w-52 h-full " +
                "shadow-md shadow-cst-darkgray-800"}>

                <NavBtn url={"/index-projets/create-projet"}
                        text={"Créer un projet"}
                        imgSrc={"plus_dark"}
                        alt={"icon-plus"} />

                <HorizontalSeparator />

                <IndexProjets indexProjetReload={indexProjetReload} setIndexProjetReload={setIndexProjetReload} />

                <HorizontalSeparator />
                <div className={"flex justify-center"}>
                    <button id={"btn-index-projet-reload"}
                            className={"m-1 p-1 rounded-md hover:bg-btn-hover active:bg-cst-darkgray-700"}
                            onClick={onClickReload}>
                        <img src={GetImgByFormat("refresh", 16)} alt={"icon_reload"}/>
                    </button>

                    <NavLink to={"/index-projets/settings/general"}
                             id={"btn-parametres-projet"}
                             className={"m-1 p-1 rounded-md hover:bg-btn-hover active:bg-cst-darkgray-700"}>
                        <img src={GetImgByFormat("settings", 16)} alt={"icon_settings"}/>
                    </NavLink>
                </div>
            </nav>

            <Outlet context={[setIndexProjetReload]} />
        </div >
    )
}