import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    libelle: '',
    codeCouleur: "#a80000",
    lienDoc: '',
}

const { actions, reducer } = createSlice({
    name: "technologie",
    initialState,
    reducers: {
        setTechnologie: {
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
        resetTechnologie: (draft) => {
            draft.libelle = ''
            draft.codeCouleur = "#a80000"
            draft.lienDoc = ''
        }
    }
})

export const { setTechnologie, setCodeCouleur, resetTechnologie } = actions
export default reducer