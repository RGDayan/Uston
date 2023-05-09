import React from "react";
import FormUpdateRecit from "../../assets/form/recits/formupdaterecit";
import VerticalSeparator from "../../assets/miscellaneous/verticalseparator";
import FormAddCategorie from "../../assets/form/formaddcategorie";
import {useOutletContext} from "react-router-dom";

export default function ResumeRecit(){
    const [recit, setRecit, setRecitReload, setRecitsReload] = useOutletContext();
    return (
        <div className={"flex flex-col xl:flex-row justify-around p-2"}>
            <FormUpdateRecit recit={recit}
                             setRecit={setRecit}
                             setRecitsReload={setRecitsReload} />
            <VerticalSeparator />
            <FormAddCategorie value={recit} setReload={setRecitReload} urlEndpoint={"/recits-utilisateur-add-categorie"}/>
        </div>
    )
}