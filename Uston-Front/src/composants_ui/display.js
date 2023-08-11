import React from "react";
import {useSelector} from "react-redux";
import {selectDisplayText} from "../redux/selectors";

export default function Display(){
    const displayText = useSelector(selectDisplayText())

    return (
        <p id={"score"} className={" p-3 rounded-xl text-center bg-blue-600 text-2xl font-bold"}>
            {displayText}
        </p>
    )
}