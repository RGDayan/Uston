import React from "react";
import {GetImgByWindowSize} from "../../../controllers/assets/imgcontroller";

export default function UserImg(){
    let img = GetImgByWindowSize("user", 96);
    return(
        <div className={
            "flex " +
            "w-full " +
            "justify-center " +
            "py-5"
        }>
            <img src={img} alt={"User_Img"}/>
        </div>
    )
}