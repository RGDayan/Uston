import React from "react";
import {Route, Routes} from "react-router-dom";
import BriqueProjet from "./projet/briqueprojet";
import ShowProjet from "./projet/showprojet";
import ResumeProjet from "./projet/resumeprojet";
import FormCreateProjet from "../assets/form/projets/formcreateprojet";
import PageParametresProjets from "./parametres/pageparametresprojets";
import PageParametresTechnologies from "./parametres/pageparametrestechnologies";
import RecitsProjet from "./recit/recitsprojet";
import ShowRecit from "./recit/showrecit";
import SuggestionsProjet from "./suggestion/suggestionsprojet";
import ShowSuggestion from "./suggestion/showsuggestion";

export default function CurrentPage(){
    return (
        <section className={
            "flex flex-col " +
            "justify-between " +
            "w-full h-full min-h-screen " +
            "bg-background text-white " +
            "overflow-auto"}>
            <Routes>

                {/*#region ROUTES DES PROJETS*/}
                <Route path={"/"} element={<BriqueProjet />} />
                <Route path={"/index-projets/*"} element={<BriqueProjet />} />
                <Route path={"/index-projets"} element={<BriqueProjet />} >
                    <Route path={"/index-projets/create-projet"} element={<FormCreateProjet />} />
                    <Route path={"/index-projets/show-projet/:idProjet"} element={<ShowProjet />}>
                        <Route path={"/index-projets/show-projet/:idProjet/resume"} element={<ResumeProjet />} />
                        <Route path={"/index-projets/show-projet/:idProjet/index-recits"} element={<RecitsProjet />} >
                            <Route path={"/index-projets/show-projet/:idProjet/index-recits/:idRecit"} element={<ShowRecit />} />
                        </Route>
                        <Route path={"/index-projets/show-projet/:idProjet/index-suggestions"} element={<SuggestionsProjet />} />
                        <Route path={"/index-projets/show-projet/:idProjet/index-suggestions/:idSuggestion"} element={<ShowSuggestion />}/>
                        <Route path={"/index-projets/show-projet/:idProjet/fichiers"} element={<></>} />
                    </Route>
                    <Route path={"/index-projets/settings"} element={<PageParametresProjets/>}>
                        <Route path={"/index-projets/settings/general"} element={<></>}/>
                        <Route path={"/index-projets/settings/technologies"} element={<PageParametresTechnologies />}/>
                    </Route>
                </Route>
                {/*#endregion*/}

                <Route path={"/index-stories"} element={<></>} />
                <Route path={"/index-suggestions"} element={<></>} />
                <Route path={"/index-signalement"} element={<></>} />
                <Route path={"/index-user"} element={<></>} />
                <Route path={"/configuration"} element={<></>} />
            </Routes>
        </section>
    )
}