import React from "react";

export default function InputTextArea({libelle, name, onChange, rows=3}){
    return (
        <div className={"flex flex-col"}>
            <label id={"label-" + name}
                   className={"text-sm"}>
                {libelle}
            </label>
            <textarea name={name}
                      rows={rows}

                      className={"pl-1 bg-darkgray-700 outline-none"}
                      onChange={onChange}/>
        </div>
    )
}