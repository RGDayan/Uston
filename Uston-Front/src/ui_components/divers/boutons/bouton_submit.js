import React from "react";
import GetImgByFormat from "../../../controllers/assets/imgcontroller";

export default function BoutonSubmit({id, onclick, contenu, imgSrc = "", imgFormat, alt, className}) {
    return (
        <button id={id}
                type={"submit"}
                className={"flex p-2 " +
                 "hover:bg-hover active:bg-select hover:cursor-pointer transition duration-150 " +
                 className}
                onClick={onclick}>
            {
                imgSrc !== "" ?
                    <img src={GetImgByFormat(imgSrc, imgFormat)}
                         alt={alt}
                         className={"h-fit w-fit p-1"}/>
                    :""
            }
            {contenu}
        </button>
    )
}