import moviesReducer, {
  setGenre,
  setRatingFilter,
  addMovies
} from './moviesSlice';

describe('moviesSlice', () => {
  const initialState = {
    movies: [],
    selectedGenre: 'All',
    ratingFilter: 0
  };

  test('should set genre', () => {
    const state = moviesReducer(initialState, setGenre('Drama'));
    expect(state.selectedGenre).toBe('Drama');
  });

  test('should set rating filter', () => {
    const state = moviesReducer(initialState, setRatingFilter(4));
    expect(state.ratingFilter).toBe(4);
  });

  test('should add movies', () => {
    const movies = [{ id: 1, title: 'Matrix' }];
    const state = moviesReducer(initialState, addMovies(movies));
    expect(state.movies.length).toBe(1);
  });
});
