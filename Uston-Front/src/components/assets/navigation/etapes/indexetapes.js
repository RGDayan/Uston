import React from "react";
import Titre from "../../miscellaneous/titre";
import FormCreateEtape from "../../form/etapes/formcreateetape";
import FormUpdateEtape from "../../form/etapes/formupdateetape";
import FormDeleteEtape from "../../form/etapes/formdeleteetape";
import {useOutletContext} from "react-router-dom";

export default function IndexEtapes(){
    // eslint-disable-next-line no-unused-vars
    const [recit, setRecit, setRecitReload, setRecitsReload] = useOutletContext();

    return (
        <div className={"flex flex-col w-full p-2 items-center overflow-y-hidden"}>
            <div className={"flex w-full items-center"}>
                <Titre text={"Pas-à-pas"}/>
                <FormCreateEtape setRecitReload={setRecitReload} />
            </div>

                {
                    recit.etapes.length !== 0 ?
                        <div className={"w-full overflow-y-scroll"}>
                            {
                                recit.etapes.map((etape) => {
                                    return (
                                        <FormUpdateEtape key={etape.id} etape={etape} setRecitReload={setRecitReload}>
                                            <FormDeleteEtape etape={etape} setRecitReload={setRecitReload}/>
                                        </FormUpdateEtape>
                                    )
                                })
                            }
                        </div>:
                        <div className={"flex items-center"}>
                            <FormCreateEtape setRecitReload={setRecitReload} />
                            "Ajoutez la première étape de ce récit !"
                        </div>
                }
        </div>
    )
}