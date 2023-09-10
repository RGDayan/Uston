import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    projetId: null
}

const { actions, reducer } = createSlice({
    name: "navigation",
    initialState,
    reducers: {
        setProjetId: (draft, action) => {
            draft.projetId = action.payload
        }
    }
})

export const { setProjetId } = actions;
export default reducer;