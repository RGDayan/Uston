import React from 'react';
import NavBtn from "./navbtn";

export default function NavBar(){
    return (
        <div className={
            "flex flex-col " +
            "w-fit "}>
            <NavBtn text={"Projets"}
                    url={"/index-projets"}
                    imgSrc={"project"}
                    alt={"ico"}/>
            <NavBtn text={"Récits utilisateur"}
                    url={"/index-stories"}
                    imgSrc={"user_story"}
                    alt={"ico"}/>
            <NavBtn text={"Suggestions"}
                    url={"/index-suggestions"}
                    imgSrc={"suggestion_dark"}
                    alt={"ico"}/>
        </div>
    )
}