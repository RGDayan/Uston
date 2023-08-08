import {useLayoutEffect, useState} from "react";
import project16 from "../../resources/project/project16.png";
import project32 from "../../resources/project/project32.png";
import project64 from "../../resources/project/project64.png";
import user_story16 from "../../resources/user_story/user_story16.png";
import user_story32 from "../../resources/user_story/user_story32.png";
import user_story64 from "../../resources/user_story/user_story64.png";
import suggestion_dark16 from "../../resources/suggestion/suggestion_dark16.png";
import suggestion_dark32 from "../../resources/suggestion/suggestion_dark32.png";
import suggestion_dark64 from "../../resources/suggestion/suggestion_dark64.png";
import logo_uston from "../../resources/logo/logo_uston.png";
import logo_sans_font from "../../resources/logo/logo_sans_font.png";
import logo_sans_font16 from "../../resources/logo/logo_sans_font16.png";
import logo_sans_font32 from "../../resources/logo/logo_sans_font32.png";
import logo_sans_font64 from "../../resources/logo/logo_sans_font64.png";
import logo_uston_font from "../../resources/logo/logo_uston_font.png";
import signalement16 from "../../resources/signalement/signalement16.png";
import signalement32 from "../../resources/signalement/signalement32.png";
import signalement64 from "../../resources/signalement/signalement64.png";
import admin_users16 from "../../resources/admin_users/admin_users16.png";
import admin_users32 from "../../resources/admin_users/admin_users32.png";
import admin_users64 from "../../resources/admin_users/admin_users64.png";
import settings16 from "../../resources/settings/settings16.png";
import settings32 from "../../resources/settings/settings32.png";
import settings64 from "../../resources/settings/settings64.png";
import user16 from "../../resources/user/user16.png";
import user32 from "../../resources/user/user32.png";
import user64 from "../../resources/user/user64.png";
import user96 from "../../resources/user/user96.png";
import plus_dark16 from "../../resources/plus/plus_dark16.png";
import plus_dark32 from "../../resources/plus/plus_dark32.png";
import plus_dark64 from "../../resources/plus/plus_dark64.png";
import refresh16 from "../../resources/refresh/refresh16.png";
import refresh32 from "../../resources/refresh/refresh32.png";
import refresh64 from "../../resources/refresh/refresh64.png";
import trash64 from "../../resources/trash/trash64.png";
import trash32 from "../../resources/trash/trash32.png";
import trash16 from "../../resources/trash/trash16.png";
import pen64 from "../../resources/pen/pen64.png";
import pen32 from "../../resources/pen/pen32.png";
import pen16 from "../../resources/pen/pen16.png";
import back_arrow64 from "../../resources/back_arrow/back_arrow64.png";
import back_arrow32 from "../../resources/back_arrow/back_arrow32.png";
import back_arrow16 from "../../resources/back_arrow/back_arrow16.png";
import forward_arrow64 from "../../resources/forward_arrow/forward_arrow64.png";
import forward_arrow32 from "../../resources/forward_arrow/forward_arrow32.png";
import forward_arrow16 from "../../resources/forward_arrow/forward_arrow16.png";
import home_dark16 from "../../resources/home/home_dark16.png";
import home_dark32 from "../../resources/home/home_dark32.png";
import home_dark64 from "../../resources/home/home_dark64.png";
import visualize_dark16 from "../../resources/visualize/visualize_dark16.png";
import visualize_dark32 from "../../resources/visualize/visualize_dark32.png";
import visualize_dark64 from "../../resources/visualize/visualize_dark64.png";

const images = {
    project16,
    project32,
    project64,
    user_story16,
    user_story32,
    user_story64,
    suggestion_dark16,
    suggestion_dark32,
    suggestion_dark64,
    logo_uston,
    logo_sans_font,
    logo_sans_font16,
    logo_sans_font32,
    logo_sans_font64,
    logo_uston_font,
    signalement16,
    signalement32,
    signalement64,
    admin_users16,
    admin_users32,
    admin_users64,
    settings16,
    settings32,
    settings64,
    user16,
    user32,
    user64,
    user96,
    plus_dark16,
    plus_dark32,
    plus_dark64,
    refresh16,
    refresh32,
    refresh64,
    trash64,
    trash32,
    trash16,
    pen64,
    pen32,
    pen16,
    back_arrow64,
    back_arrow32,
    back_arrow16,
    forward_arrow64,
    forward_arrow32,
    forward_arrow16,
    home_dark16,
    home_dark32,
    home_dark64,
    visualize_dark16,
    visualize_dark32,
    visualize_dark64
};

/**
 * Retourne une image correspondant aux paramètres.
 * Nécessite d'avoir déjà ajouté les images au tableau images[] dans cette fonction
 * @param imgName String : Nom de l'image
 * @param format Int : Format de l'image voulu
 * @returns {*} String : Chemin vers l'image désirée
 */
export default function GetImgByFormat(imgName, format){
    return images[imgName+format];
}

/**
 * Récupération de l'image au format correspondant à la taille de la fenêtre (exemple avec le Logo)
 * @param imgName String : nom de l'image
 * @param formatByDefault Int : format à retourner par défaut (si vide, retourne l'image sans format prédéfini)
 * @returns {*} String : chemin menant à l'image.
 */
export function GetImgByWindowSize(imgName, formatByDefault){
    const [width] = useWindowsSize();

    return !width || width <= 640 ? images[imgName + "16"]
        : width <= 1024 ? images[imgName + "32"]
        : images[imgName + formatByDefault];
}

/**
 * Controller des dimensions de la fenêtre du navigateur
 * @returns {number[]} Array[int, int] : Dimensions de la fenêtre du navigateur
 */
export function useWindowsSize(){
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize(){
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}
