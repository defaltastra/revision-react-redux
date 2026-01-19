import reviewsReducer, {
  addReview,
  deleteReview
} from './reviewsSlice';

describe('reviewsSlice', () => {
  test('add review', () => {
    const state = reviewsReducer(
      { reviews: [] },
      addReview({ text: 'Great movie' })
    );
    expect(state.reviews.length).toBe(1);
  });

  test('delete review', () => {
    const review = { id: 1, text: 'Nice' };
    const state = reviewsReducer(
      { reviews: [review] },
      deleteReview(1)
    );
    expect(state.reviews.length).toBe(0);
  });
});
