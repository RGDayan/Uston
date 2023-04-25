import React, {useState} from "react";
import {useOutletContext} from "react-router-dom";
import FormUpdateProjet from "../../assets/form/projets/formupdateprojet";
import HorizontalSeparator from "../../assets/miscellaneous/horizontalseparator";
import Titre from "../../assets/miscellaneous/titre";
import FormCreateCategorie from "../../assets/form/projets/formcreatecategorie";
import VerticalSeparator from "../../assets/miscellaneous/verticalseparator";
import FormCreateTechnologie from "../../assets/form/technologies/formcreateTechnologie";
import {useWindowsSize} from "../../../controllers/assets/imgcontroller";
import FormAddTechnologie from "../../assets/form/technologies/formaddtechnologie";

export default function ResumeProjet(){
    const [projet, setProjet, setIndexProjetReload, setProjetReload] = useOutletContext();
    const [reloadTechnologies, setReloadTechnologies] = useState();
    const [width] = useWindowsSize();

    return (
        <>
            <Titre text={"Informations"}/>

            <FormUpdateProjet projet={projet} setProjet={setProjet} setIndexProjetReload={setIndexProjetReload} setProjetReload={setProjetReload}/>

            <HorizontalSeparator />

            <div className={"flex flex-col 2xl:flex-row justify-center xl:justify-evenly self-center 2xl:self-stretch"}>
                <FormCreateCategorie projet={projet} setProjetReload={setProjetReload}/>
                { width > 1536 ? <VerticalSeparator/>: <HorizontalSeparator/>}
                <FormCreateTechnologie projet={projet} setProjetReload={setProjetReload} setReloadTechnologies={setReloadTechnologies}/>
                { width > 1536 ? <VerticalSeparator/>: <HorizontalSeparator/>}
                <FormAddTechnologie projet={projet} setProjetReload={setProjetReload} reloadTechnologies={reloadTechnologies}/>
            </div>

            <HorizontalSeparator />

            <div className={
                "flex  " +
                "w-full mb-20"}>
            </div>
        </>
    )
}