import React, {useEffect, useState} from "react";
import {Outlet, useOutletContext, useParams} from "react-router-dom";
import GetImgByFormat from "../../../controllers/assets/imgcontroller";
import NavProjet from "../../assets/navigation/projets/navprojet";
import {adresse_api} from "../../../controllers/environment/api";

export default function ShowProjet(){
    const [setIndexProjetReload] = useOutletContext();
    const [projetReload, setProjetReload] = useState();
    const [projets, setProjets] = useState([]);
    const [projet, setProjet] = useState({
        id: 0,
        titre: "",
        besoin: "",
        description: "",
        createAt: "",
        categories: [],
        technologies: []
    });
    const params = useParams();

    useEffect(() => {
        fetch(adresse_api + "/projets",
            {
                method: "GET"
            })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setProjets(res);
            })
    }, []);

    useEffect( () =>{

        fetch(adresse_api + "/projets/" + params.idProjet,
            {
                method: "GET"
            })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setProjet(res);
            })

    }, [params, projetReload])

    const img = GetImgByFormat("signalement", 64);

    if (projets.some(x => x.id === projet.id)){
        return (
            <section className={"relative flex flex-col w-full h-full overflow-x-hidden overflow-y-auto"}>
                <NavProjet projet={projet} setIndexProjetReload={setIndexProjetReload}/>
                <section className={"w-full h-full pt-8"}>
                    <Outlet context={[projet, setProjet, setIndexProjetReload, setProjetReload]}/>
                </section>
            </section>
        )
    }else{
        return (
            <div className={"flex  h-fit p-5"}>
                <div className={"mr-5 min-w-fit flex items-center"}>
                    <img src={img} alt={"ico_signalement"}/>
                </div>
                <div className={"p-5"}>
                    <h3 className={
                        "text-2xl font-bold mb-2"}>
                        Le projet correspondant à l'id {params.id} n'existe pas.
                    </h3>
                    <p>
                        Vous pouvez accéder aux projets existant à partir de la barre de navigation des projets.
                    </p>
                </div>
            </div>
        )
    }
}