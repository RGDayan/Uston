import React from "react";
import Label from "./label";

export default function Input ({id, name, value, label, onChange, isReadOnly = false, size}){
    return (
        <div id={id} className={
            "flex " +
            "my-1 " +
            "items-center "}>
            {
                label !== "" ?
                <Label text={label}/>
                : <></>
            }
            <input id={"input-"+id}
                   type={"text"}
                   name={name}
                   value={value}
                   className={"p-1 pl-2 " + size + " " +
                       (!isReadOnly ? "bg-input-txt border-2 border-border rounded-md": "bg-transparent outline-0")}
                   onChange={onChange}
                   readOnly={isReadOnly}/>
        </div>
    )
}