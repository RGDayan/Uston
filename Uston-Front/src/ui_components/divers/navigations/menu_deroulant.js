import React, {useState} from "react";
import BoutonNavigation from "./bouton_navigation";
import GetImgByFormat from "../../../controllers/assets/imgcontroller";

export default function MenuDeroulant({libelle, name, children, iconeSrc, estSelection = false}) {
    const [selection, setSelection] = useState(estSelection);
    let deployer = selection ? "max-h-96" : ""

    return (
        <div id={"nav-" + name}
             className={"flex flex-col"}>
            <BoutonNavigation id={"bouton-nav-wrapper-" + name}
                              contenu={libelle}
                              imgSrc={iconeSrc}
                              imgFormat={16}
                              onclick={() => setSelection((prev) => !prev)}
                              className={selection ? "bg-darkgray-700": ""}
            >
                <img src={GetImgByFormat("arrow_right", 16)}
                     alt={""}
                     className={"h-fit w-fit p-1"}/>
            </BoutonNavigation>
            <div id={"children-nav-" + name}
                 className={"flex flex-col " +
                     "max-h-0 " + deployer +
                     " overflow-hidden transition-all " +
                     "duration-300 ease-in-out"}>
                {children}
            </div>
        </div>
    );
}