import { musicApi } from "./services/service";
import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./features/playerSlice";
import favouriteReducer from "./features/favouriteSlice";
import collectionReducer from "./features/collectionSlice";

export const store = configureStore({
  reducer: {
    [musicApi.reducerPath]: musicApi.reducer,
    player: playerReducer,
    favourites: favouriteReducer,
    collections: collectionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(musicApi.middleware),
});
