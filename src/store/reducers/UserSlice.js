
import { createSlice } from "@reduxjs/toolkit";

const initiatState = {
    currentCategory: 0,
    categories: {
        women: {text: 'women', id: 0},
        mans: {text: 'man', id: 1},
        kids: {text: 'kid', id: 2},
    },
    isLoading: false
}

const userSlice = createSlice({
    name: 'user',
    initiatState,
    reducers: { 
        changeCurrentCategory(state, action) {
            state.currentCategory = action.payload
        }
    }
})

export default userSlice.reducer;