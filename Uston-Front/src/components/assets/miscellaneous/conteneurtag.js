import React from "react";
import Label from "./label";

export default function ConteneurTag(props){
    return (
        <div className={
            "flex " +
            "w-full min-w-96 h-fit " +
            "my-1 " +
            "items-center "}>
            <Label text={props.label}/>
            <ul className={
                "flex " +
                "min-w-64 min-h-12 " +
                "p-1 pl-2 " +
                "bg-input-txt border-2 border-border " +
                "rounded-md"}>
                {props.children}
            </ul>
        </div>
    )
}