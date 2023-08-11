import React from "react";
import {useSelector} from "react-redux";
import {selectPlayerCoupsRestants} from "../redux/selectors";

export default function PlayerCoupsRestants({player}){
    const coupsRestant = useSelector(selectPlayerCoupsRestants(player));

    return (
        <div className={"flex m-3 justify-between p-4 bg-purple-800 rounded-xl text-xl font-bold"}>
            <p>
               Coups restants
            </p>
            <p>
                {coupsRestant !== 0 ? coupsRestant: "Gagné !"}
            </p>
        </div>
    )
}