import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentCategory: 0,
    categories: [
        {text: 'Женская', id: 0},
        {text: 'Мужская', id: 1},
        {text: 'Детская', id: 2},
    ],
}

const uiReducer = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        changeCurrentCategory(state, action) {
            state.currentCategory = action.payload
        }
    }
})

export const { changeCurrentCategory } = uiReducer.actions
export default uiReducer.reducer