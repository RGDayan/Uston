import React, {useEffect, useState} from "react";
import {useOutletContext} from "react-router-dom";
import FormCreateSuggestion from "../../assets/form/suggestions/formcreatesuggestion";
import IndexSuggestions from "../../assets/navigation/suggestions/indexsuggestions";
import ReloadIndex from "../../assets/navigation/reloadindex";
import Titre from "../../assets/miscellaneous/titre";
import {adresse_api} from "../../../controllers/environment/api";

export default function SuggestionsProjet(){
    const [projet] = useOutletContext();
    const [suggestions, setSuggestions] = useState([]);
    const [suggestionsReload, setSuggestionsReload] = useState(false);

    useEffect(() => {
        fetch(adresse_api + "/projets/" + projet.id + "/suggestions",
            {
                method: "GET"
            })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setSuggestions(res);
            })
    }, [projet.id, suggestionsReload])

    return (
        <div className={"flex flex-col " +
            "w-full overflow-y-hidden"}>
            <nav className={"flex ml-5"}>
                <Titre text={"Suggestions"} />
                <FormCreateSuggestion />
                <ReloadIndex margin={""}
                             padding={"p-2"}
                             rounded={""}
                             setReload={setSuggestionsReload}
                             url={"/index-projets/show-projet/" + projet.id + "/index-suggestions"}/>
            </nav>
            <IndexSuggestions suggestions={suggestions} projet={projet} />
        </div>
    )
}