import React, {useEffect, useState} from "react";
import {Outlet, useOutletContext, useParams} from "react-router-dom";
import {recitAvecCategoriesTemplate} from "../../../controllers/objets/recit";
import NavRecit from "../../assets/navigation/recits/navrecit";
import {adresse_api} from "../../../controllers/environment/api";

export default function ShowRecit(){
    const params = useParams();
    const [setRecitsReload] = useOutletContext();
    const [recit, setRecit] = useState(recitAvecCategoriesTemplate);
    const [recitReload, setRecitReload] = useState(false);

    useEffect(() => {
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
                      setRecitsReload={setRecitsReload}/>

            <Outlet context={[recit, setRecit, setRecitReload, setRecitsReload]} />
        </div>
    )
}