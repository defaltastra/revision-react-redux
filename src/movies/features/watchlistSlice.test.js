import watchlistReducer, {
  addToWatchlist,
  removeFromWatchlist,
  clearWatchlist
} from './watchlistSlice';

describe('watchlistSlice', () => {
  const movie = { id: 1, title: 'Inception' };

  test('add to watchlist', () => {
    const state = watchlistReducer({ watchlist: [] }, addToWatchlist(movie));
    expect(state.watchlist.length).toBe(1);
  });

  test('clear watchlist', () => {
    const state = watchlistReducer(
      { watchlist: [movie] },
      clearWatchlist()
    );
    expect(state.watchlist.length).toBe(0);
  });
});
