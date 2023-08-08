import React, {useState} from "react";
import NavigationCreerProjet from "./navigation_creer_projet";
import FormulaireCreerProjet from "./formulaire_creer_projet";
import FormulaireAjouterCategorie from "./formulaire_ajouter_categorie";
import TitreFormulaireCreerProjet from "./titre_formulaire_creer_projet";
import FormulaireAjouterTechnologie from "./formulaire_ajouter_technologie";
import {adresse_api} from "../../../controllers/environment/api";

export default function CreerProjet(){
    const [projet, setProjet] = useState();
    const [categories, setCategories] = useState([]);
    const [selectedTechnologies, setSelectedTechnologies] = useState([]);
    const [pageFormulaire, setPageFormulaire] = useState(1);

    function submitProjet(){
        fetch(adresse_api + "/projets", {
            method: "POST",
            body: JSON.stringify(projet)
        }).then((res) => {
            return res.json();
        }).then((res) => {
            setProjet(res);
            setCategories(categories.map((categorie) => categorie.projet_id = res.id));
        })

        // TODO Gérer les projet_id lors de l'ajout des catégories
        categories.map((categorie) => {
            console.log(categories);
            console.log(categorie);
            fetch(adresse_api + "/categories", {
                method: "POST",
                body: JSON.stringify(categorie)
            })
        })
    }

    function paginationFormulaire(){
        switch(pageFormulaire){
            case 1:
                return (
                    <>
                        <TitreFormulaireCreerProjet titre={"Nommez votre projet"}
                                                    messageInfo={"Attention : Le projet sera créé seulement à la confirmation des 3 formulaires"}/>
                        <FormulaireCreerProjet key={1} projet={projet}
                                               setProjet={setProjet}
                                               suivant={() => setPageFormulaire(2)}/>
                    </>
                )

            case 2:
                return (
                    <>
                        <TitreFormulaireCreerProjet titre={"Créez vos categories"}
                                                    messageInfo={"Les catégories sont les fonctionnalités de votre projet. " +
                                                        "\nVous pourrez les utiliser en tant que Tag"}/>
                        <FormulaireAjouterCategorie key={2}
                                                    setCategories={setCategories}
                                                    suivant={() => (setPageFormulaire(3))}/>
                    </>
                )
            case 3:
                return (
                    <>
                        <TitreFormulaireCreerProjet titre={"Ajoutez vos technologies"}
                                                    messageInfo={"Les technologies sont celles utilisées dans votre projet. " +
                                                        "\nVous pourrez les utiliser en tant que Tag"}/>
                        <FormulaireAjouterTechnologie key={3}
                                                      selectedTech={selectedTechnologies}
                                                      setSelectedTech={setSelectedTechnologies}
                                                      submitProjet={submitProjet}/>
                    </>
                )
            default:
                return "Erreur : rechargez la page"
        }
    }

    return (
        <div className={"w-full"}>
            <NavigationCreerProjet />
            <section id={"formulaire-creer-projet"}
                     className={"ml-5 w-1/2 "}>
                {
                    paginationFormulaire()
                }
            </section>
        </div>
    )
}