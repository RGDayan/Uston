import React from "react";
import GetImgByFormat from "../../controllers/assets/imgcontroller";

export default function BoutonNavigation({id, onclick, contenu, imgSrc, imgFormat, alt, className}) {
    return (
        <div id={id}
            className={"flex p-2 " +
                "hover:bg-hover active:bg-select hover:cursor-pointer " +
                className}
            onClick={onclick}>
            <img src={GetImgByFormat(imgSrc, imgFormat)}
                 alt={alt}
                 className={"h-fit w-fit p-1"}/>
            {contenu}
        </div>
    )
}