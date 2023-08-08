import React, {useState} from "react";
import NavigationCreerProjet from "./navigation_creer_projet";
import FormulaireCreerProjet from "./formulaire_creer_projet";
import FormulaireAjouterCategorie from "./formulaire_ajouter_categorie";
import TitreFormulaireCreerProjet from "./titre_formulaire_creer_projet";
import FormulaireAjouterTechnologie from "./formulaire_ajouter_technologie";

export default function CreerProjet(){
    const [projet, setProjet] = useState();
    const [categories, setCategories] = useState([]);
    const [technologies, setTechnologies] = useState([]);
    const [pageFormulaire, setPageFormulaire] = useState(1);

    function paginationFormulaire(){
        switch(pageFormulaire){
            case 1:
                return (
                    <>
                        <TitreFormulaireCreerProjet titre={"Nommez votre projet"}
                                                    messageInfo={"Attention : Le projet sera créé seulement à la confirmation des 3 formulaires"}/>
                        <FormulaireCreerProjet key={1} projet={projet}
                                               setProjet={setProjet}
                                               suivant={() => (setPageFormulaire(2))}/>
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
                        <TitreFormulaireCreerProjet titre={"Créez vos technologies"}
                                                    messageInfo={"Les technologies sont celles utilisées dans votre projet. " +
                                                        "\nVous pourrez les utiliser en tant que Tag"}/>
                        <FormulaireAjouterTechnologie key={3}
                                                      setTechnologies={setTechnologies}/>
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