export const setPlaying = (playing) => ({
    type: "setPlaying",
    payload: playing
})
export const restartAction = () => ({ type: "restart"})
export const pointScoredAction = (playerId) => ({
    type: "pointScored",
    payload: { playerId : playerId}
})



export function autoplay(store) {

    const isPlaying = store.getState().playing
    if (isPlaying || store.getState().winner)
        return;

    store.dispatch(setPlaying(true));

    playNextPoint();

    function playNextPoint(){
        if (!store.getState().playing)
            return;

        window.setTimeout(() => {

            if (!store.getState().playing)
                return;

            const pointWinner = Math.random() > 0.5 ? "player1" : "player2"

            store.dispatch(pointScoredAction(pointWinner))
            if (store.getState().winner)
                store.dispatch(setPlaying(false))

            playNextPoint()
        }, 500)

    }
}