import React from "react";
import Tag from "./tag";

export default function ListeTags({libelle, name, type, objets, action}){
    return (
        <div className="flex flex-col">
            <label id={"label-" + name}
                   className={"text-sm"}>
                {libelle}
            </label>
            <ul className={"flex flex-wrap " +
                "w-fit min-w-64 h-fit min-h-8 " +
                "py-1 " +
                "bg-darkgray-700"}>
                {
                    objets?.map((objet) => {
                        return <Tag key={type + "-" + objet.libelle}
                                    libelle={objet.libelle}
                                    color={objet.codeCouleur}
                                    action={action(objet.libelle)}/>
                    })
                }
            </ul>
        </div>
    )
}