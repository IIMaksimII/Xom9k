
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

    }
})

export default userSlice.reducer;