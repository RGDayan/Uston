import React, {useState} from "react";
import NavigationCreerProjet from "./navigation_creer_projet";
import FormulaireCreerProjet from "./formulaire_creer_projet";
import FormulaireAjouterCategorie from "./formulaire_ajouter_categorie";

export default function CreerProjet(){
    const [projet, setProjet] = useState();
    const [categories, setCategories] = useState([]);
    const [pageFormulaire, setPageFormulaire] = useState(1);

    function paginationFormulaire(){
        switch(pageFormulaire){
            case 1:
                return <FormulaireCreerProjet key={1} projet={projet}
                                              setProjet={setProjet}
                                              suivant={() => (setPageFormulaire(2))}/>

            case 2:
                return <FormulaireAjouterCategorie key={2} categories={categories}
                                                   suivant={() => (setPageFormulaire(3))}/>
            case 3:
                return "Test3"

        }
    }

    return (
        <div className={"w-full"}>
            <NavigationCreerProjet />
            {
                paginationFormulaire()
            }
        </div>
    )
}