import React from "react";
import LabelInput from "../labels/label_input";

export default function InputText({libelle, name, value, className, onChange}){

    return (
        <div className={"flex flex-col"}>
            <LabelInput libelle={libelle} name={name} />
            <input name={name}
                   type={"text"}
                   value={value}
                   className={"pl-1 bg-darkgray-700 outline-none " + className}
                   onChange={onChange}/>
        </div>
    )
}