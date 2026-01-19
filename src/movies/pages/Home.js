import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMovies } from '../features/moviesSlice';
import Filters from '../components/Filters';
import MovieList from '../components/MovieList';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const initialMovies = [
      { id: 1, title: 'The Matrix', genre: 'Action', rating: 4.5, poster: '🎬' },
      { id: 2, title: 'Inception', genre: 'Sci-Fi', rating: 4.8, poster: '🎥' },
      { id: 3, title: 'The Godfather', genre: 'Drama', rating: 5, poster: '🎭' },
      { id: 4, title: 'Pulp Fiction', genre: 'Drama', rating: 4.6, poster: '🎪' },
      { id: 5, title: 'Interstellar', genre: 'Sci-Fi', rating: 4.7, poster: '🌌' },
    ];
    dispatch(addMovies(initialMovies));
  }, [dispatch]);

  return (
    <div className="container">
      <h2 className="mb-4 text-center fw-bold">🎬 All Movies</h2>

      <Filters />

      <MovieList />
    </div>
  );
};

export default Home;
