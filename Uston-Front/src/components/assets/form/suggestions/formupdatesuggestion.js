import React, {useState} from "react";
import Titre from "../../miscellaneous/titre";
import HorizontalSeparator from "../../miscellaneous/horizontalseparator";
import TextArea from "../../miscellaneous/textarea";
import {suggestionTemplate} from "../../../../controllers/objets/suggestion";
import EtiquetteRelation from "../../miscellaneous/etiquetterelation";
import GetImgByFormat from "../../../../controllers/assets/imgcontroller";
import FormAddCategorie from "../formaddcategorie";
import InfoContenu from "../../miscellaneous/infocontenu";
import {adresse_api} from "../../../../controllers/environment/api";

export default function FormUpdateSuggestion({suggestion, setSuggestion, setReload, toggleIsReadOnly, isReadOnly}){
    const [formCategorieVisibility, setFormCategorieVisibility] = useState(false);

    function toggleFormCategorieVisibility(){
        setFormCategorieVisibility((prev) => {return !prev});
    }

    function handle(e) {
        setSuggestion(
            {...suggestion, [e.target.name]: e.target.value}
        );
    }

    async function submit(e){
        e.preventDefault();
        let newSuggestion = {
            ...suggestionTemplate,
            id: suggestion.id,
            projet_id: suggestion.projet.id,
            titre: suggestion.titre,
            description: suggestion.description
        }

        await fetch(adresse_api + "/suggestions/" + newSuggestion.id,
            {
                method: "PUT",
                body: JSON.stringify(newSuggestion)
            })
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                setSuggestion(res);
                setReload((prev) => {return !prev});
            })

        toggleIsReadOnly(e);
        toggleFormCategorieVisibility();
    }

    return(
        <div>
            <div className={"flex w-full"}>

                {(
                    isReadOnly ?
                        <Titre text={suggestion.titre}/>
                        : <input id={"titre-suggestion"}
                                 type={"text"}
                                 name={"titre"}
                                 value={suggestion.titre}
                                 onChange={handle}
                                 className={"w-full " +
                                     "text-2xl font-bold " +
                                     "bg-input-txt border border-border outline-0"}/>
                )}
            </div>
            <div className={"flex items-center mx-1 m-2 text-gray-500 "}>
                <InfoContenu objet={suggestion} />
                <div className={"flex text-white"}>
                    {
                        isReadOnly ?
                            <></>
                            :
                            <div className={"relative"}>
                                <button id={"suggestion-add-categorie"}
                                        type={"button"}
                                        title={"Ajouter des catégories"}
                                        className={"p-2 hover:bg-btn-hover active:bg-cst-darkgray-700"}
                                        onClick={toggleFormCategorieVisibility}>
                                    <img src={GetImgByFormat("plus_dark", 16)} alt={"icon-add"}/>
                                </button>

                                {
                                    formCategorieVisibility ?
                                        ""
                                        :<div className={"absolute " +
                                            "w-96 z-10 top-5 " +
                                            "px-5 py-2 " +
                                            "bg-cst-darkgray-800 " +
                                            "rounded-lg z-50" + ( formCategorieVisibility ? "visible" : "hidden")}>
                                            <FormAddCategorie value={suggestion} setReload={() => {
                                                setReload((prev) => {return !prev});
                                                toggleFormCategorieVisibility();
                                            }} urlEndpoint={"/suggestions-add-categorie"}/>
                                        </div>
                                }
                            </div>

                    }

                    {
                        suggestion.categories.map((categorie) => {
                            return <EtiquetteRelation key={"categorie-" + categorie.id}
                                                      name={"Categorie"}
                                                      value={categorie}
                                                      valueRel={suggestion}
                                                      canDelete={!isReadOnly}
                                                      setReload={() => {
                                                          setReload((prev) => {return !prev});
                                                          toggleFormCategorieVisibility();
                                                      }}
                                                      url={"/suggestions-remove-categorie"}/>
                        })
                    }
                </div>
            </div>
            <HorizontalSeparator />

            <div className={"m-1 mt-3"}>
                {(
                    isReadOnly ?
                        <p>{suggestion.description}</p>
                        : <TextArea id={"description-categorie"}
                                    name={"description"}
                                    label={"Description"}
                                    value={suggestion.description}
                                    flexDir={"flex-col"}
                                    size={"min-h-96"}
                                    onChange={handle}/>
                )}
            </div>
            {
                isReadOnly ?
                    ""
                    :<div className={"flex w-full justify-center"}>
                        <div className={"flex w-1/4 justify-around"}>
                            <button id={"submit-suggestion"}
                                    type={"submit"}
                                    className={"px-4 py-2 " +
                                        "bg-cst-darkgray-700 hover:bg-btn-hover active:bg-cst-darkgray-800 " +
                                        "rounded-md "}
                                    onClick={submit}>
                                Valider
                            </button>
                            <button type={"button"}
                                    name={"cancel"}
                                    onClick={(e) => {
                                        toggleFormCategorieVisibility();
                                        toggleIsReadOnly(e);
                                    }}
                                    className={"px-4 py-2 " +
                                        "bg-red-600 hover:bg-red-500 active:bg-red-700 " +
                                        "rounded-md"}>
                                Annuler
                            </button>
                        </div>
                    </div>
            }
        </div>
    )
}