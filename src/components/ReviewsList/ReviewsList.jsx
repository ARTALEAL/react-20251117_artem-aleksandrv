import ReviewForm from '../ReviewForm/ReviewForm';
import styles from './ReviewsList.module.css';
import User from '../User/User';
import Review from '../Review/Review';

export default function ReviewsList({
  reviewsIds = [],
  currentRestaurantId,
  restaurauntName,
}) {
  return (
    <div className={styles.reviewsListContainer}>
      <h3 className={styles.reviewsListTitle}>Отзывы</h3>
      <ul>
        {reviewsIds.length > 0 ? (
          reviewsIds.map((id) => <Review key={id} reviewId={id} />)
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
