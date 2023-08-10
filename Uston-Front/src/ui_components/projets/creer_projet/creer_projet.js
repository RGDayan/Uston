import React, {useState} from "react";
import NavigationCreerProjet from "./navigation_creer_projet";
import TitreFormulaireCreerProjet from "./titre_formulaire_creer_projet";
import FormulaireAjouterTechnologie from "./formulaire_ajouter_technologie";
import InputText from "../../divers/inputs/input_text";
import InputTextArea from "../../divers/inputs/input_textarea";
import BoutonNavigation from "../../divers/bouton_navigation";
import {handle} from "../../../controllers/assets/form_controller";
import FormulaireAjouterCategorie from "./formulaire_ajouter_categorie";

export default function CreerProjet(){
    const [projet, setProjet] = useState({
        id: 0,
        titre: "",
        description: "",
        besoin: "",
        categories : [],
        technologies: []
    });

    function submitProjet(){
        // Appel à l'API create_projet
        fetch(process.env.REACT_APP_URL_API + "/projets", {
            method: "POST",
            body: JSON.stringify(projet)
        }).then((res) => {
            return res.json();
        }).then((res) => {
            setProjet(res);

            // Appel à l'Api create_categorie pour chaque categorie créée
            // categories.map((categorie) => {
            //     fetch(adresse_api + "/categories", {
            //         method: "POST",
            //         body: JSON.stringify(
            //             {...categorie, projet_id: res.id}
            //         )
            //     })
            //     // TODO Notifier le résultat grâce au retour de l'API create_categorie
            // })
            //
            // selectedTechnologies.map((technologie) => {
            //     fetch(adresse_api + "/projet-add-technologie", {
            //         method: "POST",
            //         body: JSON.stringify(
            //             {
            //                 technologie_id: technologie,
            //                 projet_id: res.id
            //             }
            //         )
            //     }).then((res) => {
            //         return res.json()
            //     }).then((res) => {
            //         console.log("Technologies")
            //         console.log(res)
            //     })
            // })
        })
    }

    return (
        <div className={"w-full"}>
            <NavigationCreerProjet />

            <div className="flex">
                <section id={"section-creer-projet"}
                         className={"pl-5 w-1/2 border-r border-darkgray-500 "}>
                    <TitreFormulaireCreerProjet titre={"Créez votre projet"}
                                                messageInfo={"Attention : Le projet sera uniquement créé si ses champs sont renseignés."}/>

                    <div id={"formulaire-projet"}
                         className={"p-3 pr-10"}>
                        <InputText libelle={"Titre"}
                                   name={"titre"}
                                   onChange={(e) => handle(e, projet, setProjet)}/>
                        <InputText libelle={"Description"}
                                   name={"description"}
                                   onChange={(e) => handle(e, projet, setProjet)}/>
                        <InputTextArea libelle={"Besoin"}
                                       name={"besoin"}
                                       rows={6}
                                       onChange={(e) => handle(e, projet, setProjet)}/>
                        <InputText libelle={"Categories"}
                                   name={"categorie"}
                                   onChange={(e) => handle(e, projet, setProjet)}/>
                        <InputText libelle={"Technologies"}
                                   name={"technologies"}
                                   onChange={(e) => handle(e, projet, setProjet)}/>
                    </div>

                    <div className={"flex justify-center mt-2"}>
                        <BoutonNavigation id={"bouton-valider-projet"}
                                          contenu={"Valider"}
                                          className={"w-fit border-b border-darkgray-500"}
                                          onclick={submitProjet}
                                          imgSrc={"plus_dark"}
                                          imgFormat={"16"}/>
                    </div>

                    <BoutonNavigation id={"bouton-LOG-projet"}
                                      contenu={"LOG"}
                                      className={"w-fit border-b border-darkgray-500"}
                                      onclick={() => {console.log(projet)}}/>

                </section>
                <section id="section-relation-projet"
                         className="w-1/2">

                    <FormulaireAjouterCategorie key={2}
                                                setProjet={setProjet}/>

                    <FormulaireAjouterTechnologie key={3}
                                                  projet={projet}
                                                  setProjet={setProjet}/>
                </section>
            </div>
        </div>
    )
}