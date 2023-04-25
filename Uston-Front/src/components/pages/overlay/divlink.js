import React from "react";
import {Link} from "react-router-dom";

export default function DivLink({title, items}){

    return (
        <div>
            <h2 className={
                "text-md"}>
                {title}
            </h2>
            <div className={
                "flex flex-col " +
                "pl-5 pt-2 " +
                "text-sm font-light"}>
                {GetLink(items)}
            </div>
        </div>
    )
}

/**
 * Creation de la liste de lien selon le nombre d'items à afficher
 * @param items Array : Liste liens à afficher
 * @returns {*} ReactComponents : Composants ReactJS générés
 */
function GetLink(items){
    return (
        items.map((item) => {
            // Si le lien est un lien externe, alors on passe par une balise "a" au lieu d'un lien
            if (item.url.includes("https") || item.url.includes("http")){
                return (
                    <a href={item.url} key={item.id} className={"font-display leading-tight ml-2 link link-underline"}>
                        {item.name}
                    </a>
                );
            }else {
                return (
                    <Link to={item.url} key={item.id} className={"font-display leading-tight ml-2 link link-underline"}>
                        {item.name}
                    </Link>
                );
            }
        })
    );
}