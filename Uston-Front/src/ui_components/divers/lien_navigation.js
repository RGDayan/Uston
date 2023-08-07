import React from "react";
import {NavLink} from "react-router-dom";
import GetImgByFormat from "../../controllers/assets/imgcontroller";

export default function LienNavigation({id, lien, contenu, imgSrc, imgFormat, alt, className}){
    return (
        <NavLink id={id}
                to={lien}
                className={"p-2 " +
                    "hover:bg-hover active:bg-select transition duration-150 " +
                    className} >
            <div className={"flex"}>
                <img src={GetImgByFormat(imgSrc, imgFormat)}
                     alt={alt}
                     className={"h-fit w-fit p-1"}/>
                {contenu}
            </div>
        </NavLink>
    )
}