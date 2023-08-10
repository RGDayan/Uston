import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import projetReducer from './slicers/projet_slicer';
import {getListeProjets} from "./middlewares/projet_middleware";

export default configureStore({
    reducer: {
        projet: projetReducer,
    },
    middleware: [
        ...getDefaultMiddleware(),
        getListeProjets()
    ]

})