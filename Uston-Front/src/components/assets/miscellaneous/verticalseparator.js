import React from "react";

export default function VerticalSeparator({verticalMargin = "my-5"}){
    return(
        <div className={verticalMargin + " w-0.5 bg-border shadow-inner shadow-cst-darkgray-800"}/>
    )
}