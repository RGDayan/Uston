import React from "react";
import GetImgByFormat from "../../../controllers/assets/imgcontroller";
import {NavLink} from "react-router-dom";

export default function NavBtn({text, url, imgSrc = "", alt = "", padding = "p-3 pl-4 "}){
    let img = GetImgByFormat(imgSrc, 16);
    return (
        <NavLink to={url}
                 className={({ isActive }) => {
                     return (
                         "flex  " +
                         "items-center " +
                         padding +
                         " text-white " +
                         "active:bg-cst-darkgray-700 " +
                         (isActive
                             ? "bg-btn-hover "
                             : "hover:bg-btn-hover")
                    )}}>
            <div className={
                ( imgSrc !== "" ? "mr-4": "") + " min-w-fit"}>
                <img src={img} alt={alt}/>
            </div>
            <p>
                {text}
            </p>
        </NavLink>
    )
}