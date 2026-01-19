import { createSlice } from '@reduxjs/toolkit';

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState: {
    watchlist: []
  },
  reducers: {
    addToWatchlist: (state, action) => {
      if (!state.watchlist.find(m => m.id === action.payload.id)) {
        state.watchlist.push(action.payload);
      }
    },
    removeFromWatchlist: (state, action) => {
      state.watchlist = state.watchlist.filter(m => m.id !== action.payload);
    },
    clearWatchlist: (state) => {
      state.watchlist = [];
    }
  }
});

export const { addToWatchlist, removeFromWatchlist, clearWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;