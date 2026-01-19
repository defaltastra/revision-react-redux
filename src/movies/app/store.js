import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../features/moviesSlice';
import favoritesReducer from '../features/favoritesSlice';
import watchlistReducer from '../features/watchlistSlice';
import reviewsReducer from '../features/reviewsSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    favorites: favoritesReducer,
    watchlist: watchlistReducer,
    reviews: reviewsReducer
  }
});