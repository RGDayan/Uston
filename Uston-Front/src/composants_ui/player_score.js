import React from "react";
import {useSelector} from "react-redux";
import {selectJoueurAvantage, selectPlayer} from "../redux/selectors";

export default function PlayerScore({player, content}){
    const score = useSelector(selectPlayer(player));
    const hasAdvantage = useSelector(selectJoueurAvantage(player));

    return (
        <div className={"flex m-3 justify-between p-4 bg-purple-800 rounded-xl text-xl font-bold"}>
            <p>
                {content}
            </p>
            <p>
                {hasAdvantage ? "Avantage - ": ""} {score}
            </p>

        </div>
    )
}