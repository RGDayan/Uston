import React from "react";

export default function InputText({libelle, name, value, className, onChange}){

    return (
        <div className={"flex flex-col"}>
            <label id={"label-" + name}
                   className={"text-sm"}>
                {libelle}
            </label>
            <input name={name}
                   type={"text"}
                   value={value}
                   className={"pl-1 bg-darkgray-700 outline-none " + className}
                   onChange={onChange}/>
        </div>
    )
}