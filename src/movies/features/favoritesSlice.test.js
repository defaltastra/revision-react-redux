import favoritesReducer, {
  addFavorite,
  removeFavorite
} from './favoritesSlice';

describe('favoritesSlice', () => {
  const movie = { id: 1, title: 'Matrix' };

  test('add favorite', () => {
    const state = favoritesReducer({ favorites: [] }, addFavorite(movie));
    expect(state.favorites.length).toBe(1);
  });

  test('remove favorite', () => {
    const state = favoritesReducer(
      { favorites: [movie] },
      removeFavorite(1)
    );
    expect(state.favorites.length).toBe(0);
  });
});
