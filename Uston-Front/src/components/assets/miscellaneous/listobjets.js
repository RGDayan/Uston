import React from "react";
import EtiquetteObjet from "./etiquetteobjet";
import EtiquetteRelation from "./etiquetterelation";

export default function ListObjets({values, valueRel = null, typeObjet, nomObjet, urlDelete, setReload}){
    return values ?
                values.map((value) => {
                    if (typeObjet === "relation")
                        return <EtiquetteRelation key={value.id} value={value} valueRel={valueRel} name={nomObjet} url={urlDelete} setReload={setReload}/>
                    else if (typeObjet === "objet")
                        return <EtiquetteObjet key={value.id} value={value} name={nomObjet} url={urlDelete} setReload={setReload}/>;
                    else
                        return null
                })
                : ""

}