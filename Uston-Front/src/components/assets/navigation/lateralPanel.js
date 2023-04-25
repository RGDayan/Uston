import React from "react";
import NavBar from "./navbar";
import Logo from "../images/logo";
import NavAdmin from "./navadmin";
import UserImg from "../images/userimg";
import HorizontalSeparator from "../miscellaneous/horizontalseparator";

export default function LateralPanel(){
    return (
        <nav className={
            "flex flex-col " +
            "justify-between " +
            "w-12 lg:w-44 lg:min-w-44 hover:w-44 min-w-12 h-full " +
            "bg-background " +
            "shadow-md shadow-cst-darkgray-800 z-10 " +
            "overflow-hidden " +
            "transition-all"}>
            <div>
                <Logo />
                <NavBar />
            </div>
            <div>
                <HorizontalSeparator />
                <NavAdmin />
                <HorizontalSeparator />
                <UserImg />
            </div>
        </nav>
    )
}