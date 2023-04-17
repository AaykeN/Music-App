import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favourites: [],
  favouritesSong: [],
};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      const favourite = { ...action.payload, type: "playlist" };
      const favourites = [...state.favourites, favourite];
      return { ...state, favourites };
    },
    removeFavourite: (state, action) => {
      const favourites = state.favourites.filter(
        (favourite) => favourite.id !== action.payload
      );
      return { ...state, favourites };
    },
    addSongToFavorite: (state, action) => {
      const favourite = { ...action.payload, type: "song" };
      const favouritesSong = [...state.favouritesSong, favourite];
      return { ...state, favouritesSong };
    },
    removeSongFromFavorite: (state, action) => {
      const favouritesSong = state.favouritesSong.filter(
        (favourite) => favourite.id !== action.payload
      );
      return { ...state, favouritesSong };
    },
  },
});

export const {
  addFavourite,
  removeFavourite,
  addSongToFavorite,
  removeSongFromFavorite,
} = favouriteSlice.actions;

export default favouriteSlice.reducer;
