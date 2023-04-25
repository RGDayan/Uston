import React from "react";

export default function HorizontalSeparator({color = "bg-border", margin = "mx-5", height = "h-0.5"}){
    return(
        <div className={color + " " + margin + " " + height + " shadow-inner shadow-cst-darkgray-800"}/>
    )
}