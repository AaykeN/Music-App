import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favourites: [],
};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      const favourites = [...state.favourites, action.payload];
      localStorage.setItem("favourites", JSON.stringify(favourites));
      return { ...state, favourites };
    },
    removeFavourite: (state, action) => {
      const favourites = state.favourites.filter(
        (favourite) => favourite.id !== action.payload
      );
      localStorage.setItem("favourites", JSON.stringify(favourites));
      return { ...state, favourites };
    },
  },
});

export const { addFavourite, removeFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;
