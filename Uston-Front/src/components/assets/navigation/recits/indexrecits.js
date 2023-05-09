import React from "react";
import NavBtn from "../navbtn";

export default function IndexRecits({projet, recits}){
    return (
        <div className={
            "flex-1 min-w-32 h-full " +
            "overflow-y-auto"}
             id={"index-recits"}>
            {
                recits.map((recit) => {
                    return <NavBtn key={recit.id}
                                   url={"/index-projets/show-projet/" + projet.id + "/index-recits/" + recit.id + "/resume"}
                                   text={recit.titre}
                                   padding={"p-1 pl-2"}/>
                })
            }
        </div>
    )
}