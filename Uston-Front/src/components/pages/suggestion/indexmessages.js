import React from "react";
import HorizontalSeparator from "../../assets/miscellaneous/horizontalseparator";
import InfoContenu from "../../assets/miscellaneous/infocontenu";

export default function IndexMessages({suggestion}){
    return (
        <div className={"m-5"}>
            {
                suggestion.messages.map((message) => {
                    return (
                        <div key={"message-" + message.id}>
                            <HorizontalSeparator margin={"m-5"}/>
                            <p>{message.contenu}</p>
                            <div className={"flex justify-end w-full text-gray-500"}>
                                <InfoContenu objet={message}/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}