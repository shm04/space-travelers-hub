import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocketSlices';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    dragon: dragonReducer
  },
});

export default store;
