import React from "react";

export default function InputText({libelle, name, onChange}){
    return (
        <div className={"flex flex-col"}>
            <label id={"label-" + name}
                   className={"text-sm"}>
                {libelle}
            </label>
            <input name={name}
                   type={"text"}
                   className={"pl-1 bg-darkgray-700 outline-none"}
                   onChange={onChange}/>
        </div>
    )
}