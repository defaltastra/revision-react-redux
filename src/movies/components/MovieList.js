import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

const MovieList = () => {
  const { movies, selectedGenre, ratingFilter } = useSelector(state => state.movies);

  const filteredMovies = movies.filter(movie => {
    const genreMatch =
      selectedGenre === 'All' || movie.genre === selectedGenre;

    const ratingMatch =
      Math.floor(movie.rating) >= ratingFilter;

    return genreMatch && ratingMatch;
  });

  return (
    <div className="row g-4">
      {filteredMovies.map(movie => (
        <div className="col-md-4" key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      ))}

      {filteredMovies.length === 0 && (
        <p className="text-center text-muted mt-4">
          No movies found
        </p>
      )}
    </div>
  );
};

export default MovieList;
