import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    selectedGenre: 'All',
    ratingFilter: 0
  },
  reducers: {
    setGenre: (state, action) => {
      state.selectedGenre = action.payload;
    },
    setRatingFilter: (state, action) => {
      state.ratingFilter = action.payload;
    },
    addMovies: (state, action) => {
      state.movies = [...state.movies, ...action.payload];
    }
  }
});

export const { setGenre, setRatingFilter, addMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
