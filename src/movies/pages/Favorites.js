import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../features/favoritesSlice';
import RatingStars from '../components/RatingStars';

const Favorites = () => {
  const favorites = useSelector(state => state.favorites.favorites);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2 className="mb-4 text-center fw-bold">
        ❤️ My Favorites
        <span className="badge bg-danger ms-2">{favorites.length}</span>
      </h2>

      <div className="row g-4">
        {favorites.map(movie => (
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
                  onClick={() => dispatch(removeFavorite(movie.id))}
                >
                  ❌ Remove
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>

      {favorites.length === 0 && (
        <div className="alert alert-warning text-center mt-4">
          No favorites yet
        </div>
      )}
    </div>
  );
};

export default Favorites;
