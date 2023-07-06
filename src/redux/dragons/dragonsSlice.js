import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  dragons: [],
  error: '',
};

const fetchDragons = createAsyncThunk('dragon/fetchDragon', async () => {
  await fetch('https://api.spacexdata.com/v3/dragons')
    .then((response) => response.json())
    .then(((responseData) => { console.log(responseData); }));
});

const dragonSlice = createSlice({
  name: 'dragon',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDragons.pending]: (state) => ({
      ...state,
      loading: true,
    }),

    [fetchDragons.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      dragons: action.payload
    }),

    [fetchDragons.rejected]: (state, action) => ({
      ...state,
      loading: false,
      dragons: [],
      error: action.error.message,
    }),
  },

});

export default dragonSlice.reducer;
export { fetchDragons };
