export const selectPlayer = (playerId) => (state) => state[playerId];
export const selectPlayerCoupsRestants = (playerId) => (state) => {
    const otherPlayerId = playerId === "player1" ? "player2" : "player1"
    if (state.winner === playerId)
        return "Gagné !"

    if (state.avantage === playerId)
        return 1

    if (state.avantage === otherPlayerId)
        return 3

    const playerScore = state[playerId]
    const otherPlayerScore = state[otherPlayerId]

    const pointsTo40 =
        playerScore === 0
            ? 3
            : playerScore === 15
            ? 2
            : playerScore === 30
            ? 1
            : 0;

    if (otherPlayerScore === 40)
        return pointsTo40 +2;

    return pointsTo40 + 1
}
export const selectPlayerPoints = (playerId) => (state) => state.historique.filter(x => x.winner === playerId).length;
export const selectJoueurAvantage = (playerId) => (state) => state.avantage === playerId;
export const selectDisplayText = () => (state) => {
    let displayScore = "Joueur 1 " + state.player1 + ":" + state.player2 + " Joueur 2 ";
    return state.winner != null ?
            state.winner === "player1" ? "Joueur 1 gagné" : "Joueur 2 a gagné"
            : state.avantage == null ?
                displayScore
                : state.avantage === "player1" ?
                    "Avantage " + displayScore :
                    displayScore + " Avantage";
}