import { useSelector } from 'react-redux';
import ReviewForm from '../ReviewForm/ReviewForm';
import styles from './ReviewsList.module.css';
import { selectReviewsByRestaurant } from '../../redux/entities/review/reviewSlice';
import User from '../User/User';

export default function ReviewsList({
  reviewsIds = [],
  currentRestaurantId,
  restaurauntName,
}) {
  const reviews = useSelector((state) =>
    selectReviewsByRestaurant(state, reviewsIds)
  );

  return (
    <div className={styles.reviewsListContainer}>
      <h3 className={styles.reviewsListTitle}>Отзывы</h3>
      <ul>
        {reviewsIds.length > 0 ? (
          reviews.map((item) => (
            <li key={item.id}>
              <p>
                <User userId={item.userId} />: {item.text}
              </p>
              <b>Оценка:</b> {item.rating}
            </li>
          ))
        ) : (
          <li>Будьте первым, кто оставит отзыв!</li>
        )}
      </ul>
      <ReviewForm
        currentRestaurantId={currentRestaurantId}
        title={restaurauntName}
      />
    </div>
  );
}
