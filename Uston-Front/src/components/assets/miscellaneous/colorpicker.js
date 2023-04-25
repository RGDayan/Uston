import React, {useState} from "react";
import {ChromePicker} from "react-color";
import Label from "./label";

export default function ColorPicker({id, name, label, value, position, state, setState}){
    const [currentColor, setCurrentColor] = useState(value);

    function handleColorChange(color){
        setCurrentColor(color.hex);
        let input = document.getElementById("input-"+id);
        input.value = color.hex;
        setState(
            {...state, codeCouleur: color.hex}
        );
        console.log(state)
    }

    function openColorPicker(){
        let picker = document.getElementById("color-picker-" + id);
        picker.classList.toggle("hidden");
    }

    return(
        <div className={
            "flex " +
            "items-center"}>

            <Label text={label}/>

            <input id={"input-"+id}
                 type={"text"}
                 name={name}
                 className={"w-20 p-1 pl-2 bg-input-txt border-2 border-border rounded-md"}
                 readOnly={true}/>

            <div className="relative">
                <div className={"w-12 h-12 rounded-md ml-2"}
                     style={{
                         backgroundColor : currentColor,
                         boxShadow: "0px 3px 10px " + currentColor
                     }}
                     onClick={openColorPicker}/>
                <div id={"color-picker-" + id}
                     className={
                         "absolute " +
                         position + " " +
                         "hidden"}>
                    <ChromePicker color={currentColor}
                                  onChangeComplete={handleColorChange}
                                  disableAlpha={true}/>
                </div>
            </div>

        </div>
    );
}

