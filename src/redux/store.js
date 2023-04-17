import { musicApi } from "./services/service";
import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./features/playerSlice";
import favouriteReducer from "./features/favouriteSlice";
import favouriteSongReducer from "./features/favouriteSlice";
import collectionReducer from "./features/collectionSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  favourites: favouriteReducer,
  // favouritesSong: favouriteSongReducer,
  collections: collectionReducer,
  player: playerReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    [musicApi.reducerPath]: musicApi.reducer,
    persisted: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }).concat(musicApi.middleware),
});
