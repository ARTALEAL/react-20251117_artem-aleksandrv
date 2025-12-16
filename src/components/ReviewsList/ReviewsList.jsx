import ReviewForm from '../ReviewForm/ReviewForm';
import styles from './ReviewsList.module.css';
import Review from '../Review/Review';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restauraunt/restaurauntSlice';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { getReviews } from '../../redux/entities/review/getReviews';
import { selectReviewIds } from '../../redux/entities/review/reviewSlice';
import { getUsers } from '../../redux/entities/user/getUsers';
import { useThunk } from '../../redux/hooks/useThunk';

export default function ReviewsList() {
  const { restaurantId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReviews(restaurantId));
  }, [dispatch, restaurantId]);

  useThunk(getUsers);

  const reviews = useSelector(selectReviewIds);

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  const { id, name } = restaurant;

  return (
    <div className={styles.reviewsListContainer}>
      <h3 className={styles.reviewsListTitle}>Отзывы</h3>
      <ul>
        {reviews.length > 0 ? (
          reviews.map((id) => <Review key={id} reviewId={id} />)
        ) : (
          <li>Будьте первым, кто оставит отзыв!</li>
        )}
      </ul>
      <ReviewForm currentRestaurantId={id} title={name} />
    </div>
  );
}
