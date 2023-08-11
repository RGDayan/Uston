import React from "react";
import {useSelector} from "react-redux";
import {selectPlayerPoints} from "../redux/selectors";

export default function PlayerPoints({player, content}){
    const playerPoints = useSelector(selectPlayerPoints(player));

    return (
        <div className={"flex justify-between p-4 bg-red-800 rounded-xl text-xl font-bold"}>
            <p>Score {content}</p>
            <p>Score : {playerPoints}</p>
        </div>
    )
}