import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  dragons: [],
  reservedDragons: [],
  status: 'idle',
  error: null,
};

const fetchDragons = createAsyncThunk('dragons/getDragons', async () => {
  const response = await fetch('https://api.spacexdata.com/v4/dragons');
  const data = await response.json();
  return data;
});

const dragonSlice = createSlice({
  name: 'dragon',
  initialState,
  reducers: {
    reserveDragon: (state, action) => {
      const dragon = state.dragons.find((dragon) => dragon.id === action.payload);
      if (dragon) {
        dragon.reserved = !dragon.reserved;
      }
    },
    filterDragons: (state) => {
      const dragons = state.dragons.filter(
        (dragon) => dragon.reserved === true,
      );
      if (dragons) {
        const newState = { ...state };
        newState.reservedDragons = dragons;
        return newState;
      }
      return state;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchDragons.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchDragons.fulfilled, (state, action) => ({
        ...state,
        status: 'Data fetch succeeded',
        dragons: [
          ...state.dragons,
          ...action.payload.map((dragon) => ({
            id: dragon.id,
            name: dragon.name,
            description: dragon.description,
            flickr_images: dragon.flickr_images,
            reserved: false,
          })),
        ],
      }))
      .addCase(fetchDragons.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },

});

export default dragonSlice.reducer;
export { fetchDragons };
export const { reserveDragon, filterDragons } = dragonSlice.actions;
