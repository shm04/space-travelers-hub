import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocketSlices';
import missionReducer from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    mission: missionReducer,
  },
});

export default store;
