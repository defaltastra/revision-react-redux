import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGenre, setRatingFilter } from '../features/moviesSlice';
import RatingStars from './RatingStars';

const Filters = () => {
  const dispatch = useDispatch();
  const { selectedGenre, ratingFilter } = useSelector(state => state.movies);

  const genres = ['All', 'Action', 'Sci-Fi', 'Drama', 'Comedy'];

  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="row g-3 align-items-center">

          <div className="col-md-6">
            <label className="form-label fw-bold">Genre</label>
            <select
              className="form-select"
              value={selectedGenre}
              onChange={e => dispatch(setGenre(e.target.value))}
            >
              {genres.map(genre => (
                <option key={genre}>{genre}</option>
              ))}
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label fw-bold">Minimum Rating</label>
            <RatingStars
              rating={ratingFilter}
              onSelect={rating => dispatch(setRatingFilter(rating))}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Filters;
