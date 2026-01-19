import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../src/store/store';
import MovieCard from '../../src/components/MovieCard';

test('renders movie card', () => {
  render(
    <Provider store={store}>
      <MovieCard movie={{ title: 'Matrix', genre: 'Action', rating: 5 }} />
    </Provider>
  );

  expect(screen.getByText(/Matrix/i)).toBeInTheDocument();
});
