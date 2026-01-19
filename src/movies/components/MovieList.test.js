import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../../src/store/slices/moviesSlice';
import MovieList from '../../src/components/MovieList';

test('shows no movies message', () => {
  const store = configureStore({
    reducer: { movies: moviesReducer }
  });

  render(
    <Provider store={store}>
      <MovieList />
    </Provider>
  );

  expect(screen.getByText(/No movies found/i)).toBeInTheDocument();
});
