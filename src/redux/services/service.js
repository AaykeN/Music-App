import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const musicApi = createApi({
  reducerPath: "musicApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_RAPIDAPI_KEY,
  }),
  endpoints: (builder) => ({
    getNewMusic: builder.query({
      query: () => "/new",
    }),
    getPopularMusic: builder.query({
      query: () => "/popular",
    }),
    getPlaylist: builder.query({
      query: () => "/playlist",
    }),
  }),
});

export const {
  useGetNewMusicQuery,
  useGetPopularMusicQuery,
  useGetPlaylistQuery,
} = musicApi;
