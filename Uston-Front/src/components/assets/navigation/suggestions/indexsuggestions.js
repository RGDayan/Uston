import React, {useState} from "react";
import ReactPaginate from 'react-paginate';
import EtiquetteRelation from "../../miscellaneous/etiquetterelation";
import {useNavigate} from "react-router-dom";

export default function IndexSuggestions({suggestions, projet}){
    const itemsPerPage = 15;
    const [itemOffset, setItemOffset] = useState(0);
    const navigate = useNavigate();
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = suggestions.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(suggestions.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % suggestions.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <table id={"index-suggestions"}>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Titre</td>
                        <td>Catégorie</td>
                        <td>Auteur</td>
                        <td>Date de création</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentItems.map((suggestion) => {
                            let date = new Date(suggestion.created_at);
                            return (
                                <tr key={"suggestion-" + suggestion.id}
                                    onClick={() => { navigate("/index-projets/show-projet/" + projet.id + "/index-suggestions/" + suggestion.id)}}>
                                    <td>{suggestion.id}</td>
                                    <td>{suggestion.titre}</td>
                                    <td className={"flex"}>{
                                        suggestion.categories.map((categorie) => {
                                            return (
                                                <EtiquetteRelation key={"categorie-" + categorie.id}
                                                                   name={"categorie"}
                                                                   value={categorie}
                                                                   valueRel={suggestion}
                                                                   canDelete={false}/>
                                            )
                                        })
                                    }</td>
                                    <td>Pseudo de l'auteur</td>
                                    <td>{date.toLocaleDateString() + " à " + date.toLocaleTimeString()}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className={"paginator"}>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Suivant"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="Précédent"
                    renderOnZeroPageCount={null}
                    className={"flex font-semibold"}
                    activeClassName={"bg-cst-darkgray-600"}
                />
            </div>
        </>
    )
}