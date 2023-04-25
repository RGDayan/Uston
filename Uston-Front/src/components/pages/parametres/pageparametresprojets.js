import React from "react";
import NavParamProjets from "../../assets/navigation/parametres/navparamprojets";
import {Outlet} from "react-router-dom";

export default function PageParametresProjets(){
    return (
        <section className={"w-full overflow-x-hidden overflow-y-auto"}>
            <NavParamProjets />

            <Outlet />
        </section>

    )
}