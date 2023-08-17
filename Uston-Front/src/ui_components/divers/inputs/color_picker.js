import React from "react";
import {ChromePicker} from "react-color";

export default function ColorPicker({id, name, label, value, position, dispatch}){
    function toggleColorPicker(){
        let picker = document.getElementById("color-picker-" + id);
        picker.classList.toggle("hidden");
    }

    return(
        <div className={"flex"}>

            <div className="flex flex-col">
                <label id={"label-" + name}
                       className={"text-sm"}>
                    {label}
                </label>
                <input id={"input-"+id}
                       type={"text"}
                       name={name}
                       className={"w-32 pl-1 bg-darkgray-700 outline-none"}
                       readOnly={true}
                       value={value}/>
            </div>

            <div className="relative cursor-pointer">
                <div className={"w-12 h-12 mt-2 ml-2  rounded-full"}
                     style={{
                         backgroundColor : value,
                         boxShadow: "0px 3px 10px " + value
                     }}
                     onClick={toggleColorPicker}/>
                <div id={"color-picker-" + id}
                     className={
                         "absolute " +
                         position + " " +
                         "hidden ml-2"}>
                    <ChromePicker color={value}
                                  onChangeComplete={(e) => {
                                      let input = document.getElementById("input-"+id);
                                      input.value = e.hex;
                                      dispatch(e.hex);
                                  }}
                                  disableAlpha={true}/>
                </div>
            </div>

        </div>
    );
}
