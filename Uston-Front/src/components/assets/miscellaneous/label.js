import React from "react";

export default function Label({text, width = "w-32"}){
    return (
        <label className={
            width + " h-full " +
            "pr-5"}>
            {text}
        </label>
    )
}