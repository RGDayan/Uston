import React, {useEffect, useState} from "react";
import {useOutletContext, useParams} from "react-router-dom";
import {recitAvecCategoriesTemplate} from "../../../controllers/objets/recit";
import HorizontalSeparator from "../../assets/miscellaneous/horizontalseparator";
import FormUpdateRecit from "../../assets/form/recits/formupdaterecit";
import NavRecit from "../../assets/navigation/recits/navrecit";
import FormAddCategorie from "../../assets/form/formaddcategorie";
import VerticalSeparator from "../../assets/miscellaneous/verticalseparator";
import IndexEtapes from "../../assets/navigation/etapes/indexetapes";

export default function ShowRecit(){
    const params = useParams();
    const [submit, setRecitsReload] = useOutletContext();
    const [recit, setRecit] = useState(recitAvecCategoriesTemplate);
    const [recitReload, setRecitReload] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line no-undef
        fetch(adresse_api + "/recits-utilisateur/" + params.idRecit)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setRecit(res);
            })
    }, [recitReload, params.idRecit]);

    return (
        <div className={"flex flex-col w-full"}>

            <NavRecit recit={recit}
                      submit={submit}
                      setRecitsReload={setRecitsReload}/>
            <div className={"flex flex-col xl:flex-row justify-around p-2"}>
                <FormUpdateRecit recit={recit}
                                 setRecit={setRecit}
                                 setRecitsReload={setRecitsReload} />
                <VerticalSeparator />
                <FormAddCategorie value={recit} setReload={setRecitReload} urlEndpoint={"/recits-utilisateur-add-categorie"}/>
            </div>

            <HorizontalSeparator />

            <IndexEtapes recit={recit} setRecitReload={setRecitReload}/>
        </div>
    )
}