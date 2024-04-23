
import { createSlice } from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser";




const initiatState = {
    users: [],
    isLoading: false
}

export const userSlice = createSlice({
    name: 'user',
    initiatState,
    reducers:{ 
        usersFetching(state){
            state.isLoading = true;
            state.error = ''
            state.user = action.payload;
        },
        usersFetchingSuccess(state){
            state.isLoading = false;
        },
        usersFetchingError(state){
            state.isLoading = false;
            state.error = action.payload
        },

    }
})

export default userSlice.reducer;