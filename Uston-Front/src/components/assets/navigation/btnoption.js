import React from "react";
import {NavLink} from "react-router-dom";

export default function BtnOption({ id, text, url}){
    return (
        <NavLink id={id}
                 to={url}
                 className={({ isActive }) => {
                     return (
                         "flex items-center justify-center " +
                         "h-full " +
                         "px-5 " +
                         (isActive
                             ? "bg-btn-select text-black"
                             : "hover:bg-btn-hover")
                     )}} >
            <p className={"whitespace-nowrap"}>
                {text}
            </p>
        </NavLink>
    )
}