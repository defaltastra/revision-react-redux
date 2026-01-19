import React from 'react';

const RatingStars = ({ rating, onSelect }) => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map(star => (
        <span
          key={star}
          className={`fs-5 me-1 ${star <= rating ? 'text-warning' : 'text-secondary'}`}
          style={{ cursor: onSelect ? 'pointer' : 'default' }}
          onClick={() => onSelect && onSelect(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default RatingStars;
