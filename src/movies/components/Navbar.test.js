import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../../src/components/Navbar';

test('renders navbar links', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  expect(screen.getByText(/MovieApp/i)).toBeInTheDocument();
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/Favorites/i)).toBeInTheDocument();
});
