import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {suggestionTemplateAvecCategorie} from "../../../controllers/objets/suggestion";
import NavSuggestion from "../../assets/navigation/suggestions/navsuggestion";
import FormUpdateSuggestion from "../../assets/form/suggestions/formupdatesuggestion";
import IndexMessages from "./indexmessages";
import FormCreateMessage from "../../assets/form/messages/formcreatemessage";
import {adresse_api} from "../../../controllers/environment/api";

export default function ShowSuggestion(){
    const params = useParams();
    const [suggestion, setSuggestion] = useState(suggestionTemplateAvecCategorie);
    const [reload, setReload] = useState(false);
    const [isReadOnly, setIsReadOnly] = useState(true);
    const [isFormCreateVisible, setIsFormCreateVisible] = useState(false);

    useEffect(() => {
        fetch(adresse_api + "/suggestions/" + params.idSuggestion)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setSuggestion(res);
                setIsReadOnly(true);
            })
    }, [reload, params.idSuggestion]);

    function toggleIsReadOnly(e){
        let bool = !isReadOnly;
        setIsReadOnly(bool);
        if (e.target.name === "cancel")
            setReload((prev) => {return !prev});
    }

    function toggleFormCreateVisibility(){
        setIsFormCreateVisible((prev) => {return !prev});

    }

    return (
        <div className={"relative h-full overflow-y-auto"}>
            <NavSuggestion suggestion={suggestion}
                           isReadOnly={isReadOnly}
                           toggleIsReadOnly={toggleIsReadOnly}
                           setReload={setReload}
                           toggleFormCreateVisibility={toggleFormCreateVisibility}/>
            <div className={"mt-8 ml-5"}>
                <FormUpdateSuggestion suggestion={suggestion}
                                      setSuggestion={setSuggestion}
                                      setReload={setReload}
                                      isReadOnly={isReadOnly}
                                      toggleIsReadOnly={toggleIsReadOnly}/>
                <IndexMessages suggestion={suggestion}/>
                {
                    isFormCreateVisible ?
                        <FormCreateMessage suggestion={suggestion} setReload={setReload} setVisibility={setIsFormCreateVisible} />
                        : ""
                }
            </div>
        </div>
    )
}