import React, {useState} from "react";
import ColorLighter from "../../../controllers/assets/colorlighter";

export default function BtnDeleteEtiquette({value, handleOpenModal}){
    const bgColor = ColorLighter(value.codeCouleur, 20);
    const hoverColor = ColorLighter(value.codeCouleur, 40);
    const activeColor = ColorLighter(value.codeCouleur, -30);
    const [color, setColor] = useState(bgColor);

    return (
        <button className={"sticky right-0 h-6 w-6 ml-1 text-xs p-1 rounded-full"}
                style={{
                    backgroundColor : color
                }}
                onMouseEnter={() => setColor(hoverColor)}
                onMouseOut={() => setColor(bgColor)}
                onMouseDown={() => setColor(activeColor)}
                onClick={handleOpenModal}>
            ✕
        </button>
    )
}