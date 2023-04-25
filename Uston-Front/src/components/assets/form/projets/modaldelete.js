import React from "react";
import GetImgByFormat from "../../../../controllers/assets/imgcontroller";
import ReactDOM from "react-dom";
import FormDelete from "../formdelete";
import {useNavigate} from "react-router-dom";

export default function ModalDelete({open, titre, libelleConfirmation, url, method= "DELETE", body= {}, value, name, onClose, setReload, doNavAfterAction, navAfterAction}){
    const navigate = useNavigate();

    if (!open)
        return null;

    const imgSignalement = GetImgByFormat("signalement", 32);
    let img = <img src={imgSignalement} alt={"ico-signalement"}/>;

    async function submitDelete(e){
        e.preventDefault();

        await fetch(url,
            {
                method: method,
                body: JSON.stringify(body)
            })
            .then((res) => {
                return res.json()
            })

        if (setReload !== undefined)
            setReload((prev) => {return !prev});

        onClose();

        if (doNavAfterAction)
            navigate(navAfterAction);
    }

    return ReactDOM.createPortal(
        <>
            <div className={"fixed top-0 left-0 right-0 bottom-0 bg-cst-darkgray-700 bg-opacity-50 z-40"}/>
            <div className={"fixed " +
                "flex flex-col " +
                "w-1/2 " +
                "top-1/4 left-1/4 " +
                "p-5 " +
                "bg-cst-darkgray-700 " +
                "rounded-lg z-50"}>
                <div className={"flex flex-row " +
                    "w-full " +
                    "justify-between"}>
                    <h2 className={"flex flex-row items-center w-full"}>
                        {img}
                        <p className={"ml-3 font-semibold  text-lg"}>
                            {titre}
                        </p>
                    </h2>
                    <button onClick={onClose}
                            className={"px-3 py-2 " +
                                "bg-red-600 hover:bg-red-500 active:bg-red-700 " +
                                "rounded-md"}>
                        ✕
                    </button>
                </div>
                <div className={"p-3"}>
                    {libelleConfirmation}
                </div>
                <FormDelete id={name + "-" + value.id} onSubmit={submitDelete}/>
            </div>
        </>,
        document.getElementById("portal")
    );
}