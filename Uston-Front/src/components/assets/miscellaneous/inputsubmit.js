import React from "react";

export default function InputSubmit({id, value, classesSupplementaires}){
    let bgClass = classesSupplementaires ? classesSupplementaires: "bg-cst-darkgray-700";

    return (
        <div id={id} className={
            "flex " +
            "w-full h-fit " +
            "justify-center"}>
            <input id={id}
                   type={"submit"}
                   value={value}
                   className={
                       "px-4 py-2 " +
                       " hover:bg-btn-hover active:bg-cst-darkgray-800 " +
                       "rounded-md " + bgClass}/>
        </div>
    )
}
