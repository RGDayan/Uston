import React, {useEffect, useState} from "react";
import {Outlet, useNavigate, useOutletContext} from "react-router-dom";
import IndexRecits from "../../assets/navigation/recits/indexrecits";
import HorizontalSeparator from "../../assets/miscellaneous/horizontalseparator";
import ReloadIndex from "../../assets/navigation/reloadindex";
import FormCreateRecit from "../../assets/form/recits/formcreaterecit";
import {recitTemplate} from "../../../controllers/objets/recit";
import {adresse_api} from "../../../controllers/environment/api";

export default function RecitsProjet(){
    const [projet] = useOutletContext();
    const [recits, setRecits] = useState([]);
    const [recitsReload, setRecitsReload] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(adresse_api + "/projets/" + projet.id + "/recits-utilisateur",
            {
                method: "GET"
            })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setRecits(res);
            })
    }, [projet.id, recitsReload])

    function submit(e){
        e.preventDefault();
        const newRecit = {
            ...recitTemplate,
            projet_id: projet.id,
            createdAt: new Date(Date.now()).toISOString()
        };

        fetch(adresse_api + "/recits-utilisateur",
            {
                method: "POST",
                body: JSON.stringify(newRecit)
            })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setRecitsReload((prev) => {return !prev});
                navigate("/index-projets/show-projet/" + projet.id + "/index-recits/" + res.id);
            })
    }

    return (
        <div className={"flex  " +
            "w-full h-full"}>
            <nav className={
                "flex flex-col " +
                "w-fit min-w-52 h-full " +
                "shadow-md shadow-cst-darkgray-800"}>
                <FormCreateRecit submit={submit} />
                <HorizontalSeparator />
                <IndexRecits recits={recits} projet={projet} />
                <HorizontalSeparator />
                <ReloadIndex setReload={setRecitsReload} url={"/index-projets/show-projet/" + projet.id + "/index-recits"}/>
            </nav>

            <Outlet context={[setRecitsReload]}/>
        </div>
    )
}