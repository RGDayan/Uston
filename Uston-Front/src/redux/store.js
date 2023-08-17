import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'

import projetReducer from './projets/projet_slicer'
import categorieReducer from './categories/categorie_slicer'
import technologieReducer from './technologies/technologie_slicer'
import technologiesReducer from './technologies/technologies_slicer'

export default configureStore({
    reducer: {
        projet: projetReducer,
        categorie: categorieReducer,
        technologie: technologieReducer,
        technologies: technologiesReducer
    },
    middleware: [
        ...getDefaultMiddleware(),
    ]

})