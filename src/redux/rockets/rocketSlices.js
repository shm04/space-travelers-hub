/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  const response = await fetch('https://api.spacexdata.com/v4/rockets');
  const data = await response.json();
  return data;
});

const initialState = {
  rockets: [],
  loading: false,
  status: 'idle',
  error: null,
};

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: {
    [getRockets.pending]: (state) => {
      state.loading = true;
    },
    [getRockets.fulfilled]: (state, action) => {
      state.status = 'Data fetch succeeded';
      const extractedRockets = action.payload.map((rocket) => ({
        id: rocket.id,
        name: rocket.name,
        description: rocket.description,
        flickr_images: rocket.flickr_images,
        reserved: false,
      }));
      state.rockets = state.rockets.concat(extractedRockets);
    },
    [getRockets.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const { reserveRocket } = rocketSlice.actions;
export default rocketSlice.reducer;
