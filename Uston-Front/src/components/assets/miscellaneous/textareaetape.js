import React from "react";

export default function TextAreaEtape({handle, value, name, label}){
    return (
        <div className={"flex flex-col " +
            "w-1/2"}>
            <label htmlFor={name + "-etape"} className={"text-center"}>{label}</label>
            <textarea id={name + "-etape"}
                      name={name}
                      rows={3}
                      className={"mx-2 px-2 " +
                          "bg-input-txt " +
                          "border border-cst-darkgray-700 rounded-md outline-0" }
                      onChange={handle}
                      defaultValue={value}/>
        </div>
    )
}