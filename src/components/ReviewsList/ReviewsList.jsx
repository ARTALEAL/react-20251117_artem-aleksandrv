import ReviewForm from '../ReviewForm/ReviewForm';
import styles from './ReviewsList.module.css';
import User from '../User/User';
import Review from '../Review/Review';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restauraunt/restaurauntSlice';
import { useParams } from 'react-router';

export default function ReviewsList() {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  const { reviews, id, name } = restaurant;

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
