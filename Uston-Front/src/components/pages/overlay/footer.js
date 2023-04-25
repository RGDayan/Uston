import React from "react";
import GetImgByFormat from "../../../controllers/assets/imgcontroller";
import DivLink from "./divlink";

export default function Footer(){
    let logo = GetImgByFormat("logo_sans_font", 32);

    const divResources = [
        {id: 1, name: 'Tutoriels', url: '/'},
        {id: 2, name: 'Sources', url: '/'},
        {id: 3, name: 'Respect et conditions d\'utilisation', url: '/'},
        {id: 4, name: 'Police et confidentialité', url: '/'},
    ];
    const divNetworks = [
        {id: 1, name: 'Twitch', url: 'https://www.twitch.tv/RG_Dayan'},
        {id: 2, name: 'Twitter', url: 'https://twitter.com/RG_Dayan'},
        {id: 3, name: 'Instagram', url: '#'},
    ];

    return (
        <footer className={
            "flex flex-col " +
            "w-full " +
            "bg-cst-darkgray-700"
        }>
            <div className={
                "flex flex-col " +
                "self-center"}>
                <div className={
                    "flex  " +
                    "pt-3 self-center"}>
                    <img src={logo} alt="Logo_Uston" className={"mr-3"}/>
                    <p className={
                        "self-center " +
                        "text-2xl font-semibold " +
                        "whitespace-nowrap"}>
                        Uston
                    </p>
                </div>
                <h2 className={
                    "font-semibold"}>
                    Application de gestion de projet informatiques
                </h2>
            </div>

            <div className={
                "flex  " +
                "w-full " +
                "justify-evenly " +
                "px-2 py-4"
            }>
                <DivLink title={"RESSOURCES"} items={divResources}/>
                <DivLink title={"RÉSEAUX SOCIAUX"} items={divNetworks}/>
            </div>

        </footer>
    )
}