import React from "react";
import {restartAction} from "../redux/actions";
import {useDispatch} from "react-redux";

export default function ResetButton(){
    const dispatch = useDispatch();

    return (

        <button className="min-w-64 p-3 bg-blue-700 text-2xl font-bold text-center rounded-xl hover:bg-blue-600 active:bg-blue-800"
                onClick={() => {dispatch(restartAction())}}>
            Restart
        </button>
    )
}