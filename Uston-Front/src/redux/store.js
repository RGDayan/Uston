import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";

import projetReducer from './projets/projet_slicer'
import categorieReducer from './categories/categorie_slicer'
import technologieReducer from './technologies/technologie_slicer'
import technologiesReducer from './technologies/technologies_slicer'
import navigationReducer from './navigation/navigation_slicer'

const persistConfig = {
    key : 'root',
    storage
}

const reducers = combineReducers({
    navigation : navigationReducer,
    projet: projetReducer,
    categorie: categorieReducer,
    technologie: technologieReducer,
    technologies: technologiesReducer
})

const persistedReducers = persistReducer(persistConfig, reducers)

export const store =  configureStore({
    reducer: persistedReducers,
    middleware: [thunk]
})

export const persistor = persistStore(store)