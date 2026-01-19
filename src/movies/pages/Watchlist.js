import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromWatchlist,
  clearWatchlist
} from '../features/watchlistSlice';
import RatingStars from '../components/RatingStars';

const Watchlist = () => {
  const watchlist = useSelector(state => state.watchlist.watchlist);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">
          📺 My Watchlist
          <span className="badge bg-success ms-2">{watchlist.length}</span>
        </h2>

        {watchlist.length > 0 && (
          <button
            className="btn btn-outline-warning"
            onClick={() => dispatch(clearWatchlist())}
          >
            🧹 Clear All
          </button>
        )}
      </div>

      <div className="row g-4">
        {watchlist.map(movie => (
          <div className="col-md-4" key={movie.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">

                <div className="fs-1 mb-2">{movie.poster || '🎬'}</div>
                <h5>{movie.title}</h5>

                <p className="mb-1">
                  <strong>Genre:</strong> {movie.genre}
                </p>

                <RatingStars rating={movie.rating} />

                <button
                  className="btn btn-danger btn-sm w-100 mt-3"
                  onClick={() => dispatch(removeFromWatchlist(movie.id))}
                >
                  ❌ Remove
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>

      {watchlist.length === 0 && (
        <div className="alert alert-info text-center mt-4">
          No movies in watchlist
        </div>
      )}
    </div>
  );
};

export default Watchlist;
