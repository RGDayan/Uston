import React from "react";

export default function Loader(){
    return (
        <div className={"flex flex-col w-fit justify-center"}>
            <div className={"h-0 w-0 " +
                "p-2.5 self-center " +
                "border-4 border-darkgray-500 " +
                "border-b-4 border-b-darkgray-300 " +
                "rounded-full " +
                "animate-[rotate_1s_linear_infinite]"}/>
            <p>Loading</p>
        </div>
    )
}