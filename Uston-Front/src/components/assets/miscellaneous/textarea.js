import React from "react";
import Label from "./label";

export default function TextArea({id, flexDir = "", name, value, size, label, onChange}){
    return (
        <div id={id}
             className={
                "flex " + flexDir + " " +
                "my-1 "}>
            <Label text={label} width={"w-fit min-w-32"}/>
            <textarea id={"textarea-"+id}
                      name={name}
                      value={value}
                      className={
                          "p-1 pl-2 " +
                          "bg-input-txt border-2 border-border " +
                          "rounded-md " + size}
                      onChange={onChange}/>
        </div>
    )
}