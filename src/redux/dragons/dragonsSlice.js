import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const url = "https://api.spacexdata.com/v3/dragons";

const initialState = {
    loading: false,
    dragons: [],
    error: ''
}

//createAsync automatically generates actions of pending, fulfiled or rejected 
const fetchDragons = createAsyncThunk("space/fetchDragons", () => {
    axios.get(url).then(response => console.log(response.data))
});

const dragonSlice = createSlice({
    name: "dragon",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchDragons.pending, state => {
            state.loading = true
        })

        builder.addCase(fetchDragons.fulfilled, (state, action) => {
            state.loading = false,
            state.dragons = action.payload,
            state.error = ""
        })

        builder.addCase(fetchDragons.rejected, (state, action) => {
            state.loading = false,
            state.dragons = [],
            state.error = action.error.message
        })
    }
})

export default dragonSlice.reducer;
export {fetchDragons};