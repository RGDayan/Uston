import React from "react";

export default function Titre({ text }){
    return (
        <h2 className={
            "p-1 text-2xl font-bold"}>
            {text}
        </h2>
    )
}