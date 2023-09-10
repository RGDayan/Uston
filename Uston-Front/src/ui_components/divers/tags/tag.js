import React, {useState} from "react";
import ColorLighter from "../../../controllers/assets/colorlighter";
import {useDispatch} from "react-redux";

export default function Tag({libelle, color, action, lienDoc}){
    const dispatch = useDispatch();
    const bgColor = ColorLighter(color, 20);
    const hoverColor = ColorLighter(color, 40);
    const activeColor = ColorLighter(color, -30);
    const [currentColor, setCurrentColor] = useState(bgColor);

    // noinspection JSValidateTypes
    return (
        <div className={"mx-1 p-1"}
             style={{
                 backgroundColor : color,
                 boxShadow: "0px 3px 10px -2px" + color
             }}>
            <a  href={lienDoc}
                className={"p-1"}>
                {libelle}
            </a>
            {action ?
            <button className={"h-6 w-6 " +
                "ml-1 p-1 " +
                "text-xs " +
                "rounded-full "}
                    style={{
                        backgroundColor: currentColor,
                        boxShadow: "0px 0px 5px " + currentColor
                    }}
                    onMouseEnter={() => setCurrentColor(hoverColor)}
                    onMouseDown={() => setCurrentColor(activeColor)}
                    onMouseUp={() => setCurrentColor(hoverColor)}
                    onMouseLeave={() => setCurrentColor(bgColor)}
                    onClick={action !== "" ? () => dispatch(action): ""}>
                ✕
            </button>:
            ""
        }
        </div>
    )
}