import {createStore} from "redux";
import {produce} from "immer";
import {setPlaying} from "./actions";

const initialeState = {
    player1: 0,
    player2: 0,
    avantage: null,
    playing: false,
    winner: null,
    historique: []
}

function reducer(state, action){
    if (action.type === "setPlaying"){
        return produce(state, (draft) => {
            draft.playing = action.payload
        })
    }
    if (action.type === "restart"){
        if (state.winner) {
            return produce(state, (draft) => {
                draft.historique.push({
                    player1: draft.player1,
                    player2: draft.player2,
                    winner: draft.winner
                })
                draft.player1 = 0
                draft.player2 = 0
                draft.avantage = null
                draft.playing = false
                draft.winner = null
                draft.coupsRestants_player1 = 4
                draft.coupsRestants_player2 = 4
            })
        }
    }
    if (action.type === "pointScored"){
        let joueurMarquant = action.payload.playerId;
        let scoreJoueurMarquant = state[joueurMarquant];

        if (state.winner || !state.playing)
            return state

        if (scoreJoueurMarquant < 30) {
            return produce(state, (draft) => {
                draft[joueurMarquant] += 15
            })
        }
        if (scoreJoueurMarquant === 30) {
            return produce(state, (draft) => {
                draft[joueurMarquant] += 10
            })
        }
        if (scoreJoueurMarquant === 40){
            if (state.avantage === joueurMarquant) {
                return produce(state, (draft) => {
                    draft.winner = joueurMarquant
                })
            }
            if (state.avantage === null && state.player1 === state.player2) {
                return produce(state, (draft) => {
                    draft.avantage = joueurMarquant
                })
            }
            else if (state.avantage === null) {
                return produce(state, (draft) => {
                    draft.winner = joueurMarquant
                })
            }
            if (state.avantage != null && state.avantage !== joueurMarquant) {
                return produce(state, (draft) => {
                    draft.avantage = null
                })
            }
        }


    }
    return state;
}

export const store = createStore(reducer, initialeState)

store.subscribe(() => {
    console.log(store.getState())
})