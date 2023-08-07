import React from "react";
import GetImgByFormat from "../../controllers/assets/imgcontroller";
import {NavLink} from "react-router-dom";

export default function UstonTitre(){
    let imgLogoFont = GetImgByFormat("logo_uston_font", "");
    let imgLogoSansFont = GetImgByFormat("logo_sans_font", "32");
    return (
        <div id={"uston_title"}
             className={"flex " +
                 "justify-center " +
                 "w-full min-h-8 " +
                 "p-2 bg-darkgray-900"}>
            <NavLink to={"/"} className={"flex"}>
                <img src={imgLogoSansFont} alt={"img_logo"}/>
                <img src={imgLogoFont} alt={"img_logo_nom"}/>
            </NavLink>
        </div>
    )
}