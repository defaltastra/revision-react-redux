import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../features/favoritesSlice';
import { addToWatchlist } from '../features/watchlistSlice';
import RatingStars from './RatingStars';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body text-center">

        <div className="fs-1 mb-2">{movie.poster || '🎬'}</div>

        <h5 className="card-title">{movie.title}</h5>
        <p className="mb-1"><strong>Genre:</strong> {movie.genre}</p>

        <RatingStars rating={movie.rating} />

        <div className="d-grid gap-2 mt-3">
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => dispatch(addFavorite(movie))}
          >
            ❤️ Add to Favorites
          </button>

          <button
            className="btn btn-outline-success btn-sm"
            onClick={() => dispatch(addToWatchlist(movie))}
          >
            ➕ Add to Watchlist
          </button>
        </div>

      </div>
    </div>
  );
};

export default MovieCard;
