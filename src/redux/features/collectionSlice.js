import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collections: [],
};

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCollection: (state, action) => {
      const collections = [...state.collections, action.payload];
      return { ...state, collections };
    },
    removeCollection: (state, action) => {
      const collections = state.collections.filter(
        (collection) => collection.id !== action.payload
      );
      return { ...state, collections };
    },
  },
});

export const { addCollection, removeCollection } = collectionSlice.actions;
export default collectionSlice.reducer;
