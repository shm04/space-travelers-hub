import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocketSlices';
import dragonReducer from './dragons/dragonsSlice';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    dragon: dragonReducer
  },
});

export default store;
