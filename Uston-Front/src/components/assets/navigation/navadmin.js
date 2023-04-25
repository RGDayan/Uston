import React from "react";
import NavBtn from "./navbtn";

export default function NavAdmin(){
    return(
        <div className={
            "flex flex-col " +
            "w-fit "}>
            <NavBtn text={"Signalements"}
                    url={"/index-signalement"}
                    imgSrc={"signalement"}
                    alt={"ico"}/>
            <NavBtn text={"Utilisateurs"}
                    url={"/index-user"}
                    imgSrc={"admin_users"}
                    alt={"ico"}/>
            <NavBtn text={"Configuration"}
                    url={"/configuration"}
                    imgSrc={"settings"}
                    alt={"ico"}/>
        </div>
    )
}