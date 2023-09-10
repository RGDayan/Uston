import React from "react";
import GetImgByFormat from "../../../controllers/assets/imgcontroller";

export default function BoutonNavigation({id, onclick, contenu, imgSrc = "", imgFormat, alt, className, children}) {
    return (
        <div id={id}
            className={"flex justify-between p-2 " +
                "hover:bg-hover active:bg-select hover:cursor-pointer transition duration-150 " +
                className}
            onClick={onclick}>
            <div className={"flex"}>
                {
                    imgSrc !== ""?
                        <img src={GetImgByFormat(imgSrc, imgFormat)}
                             alt={alt}
                             className={"h-fit w-fit p-1"}/>
                        :""
                }
                {contenu}
            </div>
            {children}
        </div>
    )
}