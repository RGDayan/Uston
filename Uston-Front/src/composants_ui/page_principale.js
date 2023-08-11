import React from "react";
import PlayPauseButton from "./play_pause_button";
import ResetButton from "./reset_button";
import PlayerButton from "./player_button";
import Display from "./display";
import PlayerPoints from "./player_points";
import PlayerScore from "./player_score";
import PlayerCoupsRestants from "./player_coups_restants";

export default function PagePrincipale(){
    return (
        <section className={"relative h-full w-full flex justify-center"}>
            <div className={"absolute top-32 flex flex-col w-1/2"}>
                <div className={"flex flex-col min-h-48 w-full justify-evenly"}>
                    <PlayerPoints player={"player1"} content={"Joueur 1"} />
                    <PlayerPoints player={"player2"} content={"Joueur 2"} />
                </div>

                <Display />

                <div className="flex min-h-48 justify-evenly w-full mt-5 ">
                    <div className="w-1/2">
                        <PlayerScore player={"player1"} content={"Joueur 1"} />
                        <PlayerCoupsRestants player={"player1"} />
                    </div>
                    <div className="w-1/2">
                        <PlayerScore player={"player2"} content={"Joueur 2"} />
                        <PlayerCoupsRestants player={"player2"} />
                    </div>
                </div>

                <div className="flex p-5 w-full justify-evenly ">
                    <PlayerButton player={"player1"} content={"Joueur 1 marque"} />
                    <PlayerButton player={"player2"} content={"Joueur 2 marque"} />
                </div>
                <div className="flex p-5 w-full justify-evenly ">
                    <ResetButton />
                    <PlayPauseButton />
                </div>
            </div>
        </section>
    )
}