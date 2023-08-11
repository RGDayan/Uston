import React from "react";
import {useStore} from "react-redux";
import {autoplay} from "../redux/actions";

export default function PlayPauseButton(){
    const store = useStore();

    return (
        <button className={"min-w-64 p-3 bg-blue-700 text-2xl font-bold text-center rounded-xl hover:bg-blue-600 active:bg-blue-800"}
                onClick={() => {autoplay(store)}}>
            Pause / Reprendre
        </button>
    )
}