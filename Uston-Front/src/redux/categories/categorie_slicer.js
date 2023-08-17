import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    libelle: '',
    codeCouleur: "#a80000"
}

const { actions, reducer } = createSlice({
    name: "categorie",
    initialState,
    reducers: {
        setCategorie: {
            prepare: (e) => ({
                payload: {
                    name: e.target.name,
                    value: e.target.value
                }
            }),
            reducer: (draft, action) => {
                if (action.payload.value !== draft[action.payload.name])
                    draft[action.payload.name] = action.payload.value
            }
        },
        setCodeCouleur: (draft, action) => {
            if (draft.codeCouleur !== action.payload)
                draft.codeCouleur = action.payload
        },
        resetCategorie: (draft) => {
            draft.libelle = ''
            draft.codeCouleur = "#a80000"
        }
    }
})

export const { setCategorie, setCodeCouleur, resetCategorie } = actions
export default reducer