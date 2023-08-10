import { createSlice } from '@reduxjs/toolkit'

export const projet_slicer = createSlice({
    name: 'projet',
    initialState: {
        newProjet: {
            id: 0,
            titre: "",
            description: "",
            besoin: "",
            categories : [],
            technologies: []
        },
        listProjets: []
    },
    reducers: {
        createNewProjet: (state, newProjet) => {

        },
        setListeProjets: (state, payload) => {
            return {...state, listProjets: payload}
        }
    }
})


// Action creators are generated for each case reducer function
export const { createNewProjet, getListeProjets } = projet_slicer.actions

export default projet_slicer.reducer