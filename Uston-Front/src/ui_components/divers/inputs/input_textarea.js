import React from "react";

export default function InputTextArea({libelle, name, onChange}){
    return (
        <div className={"flex flex-col"}>
            <label id={"label-" + name}
                   className={"text-sm"}>
                {libelle}
            </label>
            <textarea name={name}
                      rows={3}

                      className={"pl-1 bg-darkgray-700 outline-none"}
                      onChange={onChange}/>
        </div>
    )
}