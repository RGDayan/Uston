// noinspection EqualityComparisonWithCoercionJS

import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    id: 0,
    titre: '',
    description: '',
    besoin: '',
    categories : []
}

const { actions, reducer } = createSlice({
    name: 'projet',
    initialState,
    reducers: {
        setProjetPropriete: {
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
        setProjet: (draft, action) => {
            draft.id = action.payload.id
            draft.titre = action.payload.titre
            draft.description = action.payload.description
            draft.besoin = action.payload.besoin
            draft.categories = action.payload.categories
            draft.technologies = action.payload.technologies
            draft.historiqueProjets = action.payload.historiqueProjets
        },
        resetProjet: (draft) => {
            draft.id = 0
            draft.titre = ''
            draft.description = ''
            draft.besoin = ''
            draft.categories = []
        },
        ajouterCategorieProjet: (draft, action) => {
            if (action.payload.libelle === '')
                return
            draft.categories.push(action.payload)
        },
        removeCategorieProjet: (draft, action) => {
            draft.categories = draft.categories.filter((x) => x.libelle != action.payload)
        }
    }
})

// Action creators are generated for each case reducer function
export const {
    setProjetPropriete,
    setProjet,
    resetProjet,
    ajouterCategorieProjet,
    removeCategorieProjet  } = actions

export default reducer