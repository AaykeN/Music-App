import { musicApi } from "./services/service";
import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./features/playerSlice";
import favouriteReducer from "./features/favouriteSlice";

export const store = configureStore({
  // A reducer which handles the action and decides how to update the state.
  reducer: {
    [musicApi.reducerPath]: musicApi.reducer,
    player: playerReducer,
    favourites: favouriteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(musicApi.middleware),
});
