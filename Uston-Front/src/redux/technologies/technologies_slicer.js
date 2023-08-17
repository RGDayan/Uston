// noinspection EqualityComparisonWithCoercionJS

import {createSlice} from "@reduxjs/toolkit";

const initialState = []

const { actions, reducer } = createSlice({
    name: "technologies",
    initialState,
    reducers: {
        ajouterTechnologieProjet: (draft, action) => {
            draft.push(action.payload)
        },
        removeTechnologieProjet: (draft, action) => {
            return draft.filter((x) => x.libelle != action.payload)
        }
    }
})

export const { ajouterTechnologieProjet, removeTechnologieProjet } = actions
export default reducer