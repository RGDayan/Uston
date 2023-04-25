import React from "react";
import BtnOption from "../btnoption";

export default function NavParamProjets(){
    return (
        <nav className={
            "flex  " +
            "w-full h-8 " +
            "justify-between"}>
            <div className={"flex  items-center h-full"}>
                <BtnOption id={"general"}
                           text={"Général"}
                           url={"/index-projets/settings/general"}/>
                <BtnOption id={"technologies"}
                           text={"Technologies"}
                           url={"/index-projets/settings/technologies"}/>
            </div>
        </nav>

    )
}