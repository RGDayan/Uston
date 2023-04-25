import React from "react";
import Titre from "../../miscellaneous/titre";
import FormCreateEtape from "../../form/etapes/formcreateetape";
import FormUpdateEtape from "../../form/etapes/formupdateetape";
import FormDeleteEtape from "../../form/etapes/formdeleteetape";

export default function IndexEtapes({recit, setRecitReload}){
    return (
        <div className={"flex flex-col w-full p-2 items-center overflow-y-hidden"}>
            <div className={"flex w-full items-center"}>
                <Titre text={"Pas-à-pas"}/>
                <FormCreateEtape setRecitReload={setRecitReload} />
            </div>

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
            </div>
        </div>
    )
}