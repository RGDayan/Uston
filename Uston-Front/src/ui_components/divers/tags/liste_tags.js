import React from "react";
import Tag from "./tag";
import LabelInput from "../labels/label_input";

export default function ListeTags({libelle, name, type, objets, action}){
    return (
        <div className="flex flex-col">
            <LabelInput libelle={libelle} name={name} />
            <div className={"flex flex-wrap " +
                "w-fit min-w-64 h-fit min-h-8 " +
                "py-1 " +
                "bg-darkgray-700"}>
                {
                    objets?.map((objet) => {
                        return <Tag key={type + "-" + objet.libelle}
                                    libelle={objet.libelle}
                                    color={objet.codeCouleur}
                                    action={action ? action(objet.libelle) : null}
                                    lienDoc={objet.lienDoc? objet.lienDoc: ""}/>
                    })
                }
            </div>
        </div>
    )
}