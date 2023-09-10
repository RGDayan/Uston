import React from "react";
import LabelInput from "../labels/label_input";

export default function InputTextArea({libelle, name, value, onChange, rows=3}){
    return (
        <div className={"flex flex-col"}>
            <LabelInput libelle={libelle} name={name} />
            <textarea name={name}
                      rows={rows}
                      value={value}
                      className={"pl-1 bg-darkgray-700 outline-none"}
                      onChange={onChange}/>
        </div>
    )
}