import ReviewForm from '../ReviewForm/ReviewForm';
import styles from './ReviewsList.module.css';

export default function ReviewsList({
  reviews = [],
  currentRestaurantId,
  restaurauntName,
}) {
  return (
    <div className={styles.reviewsListContainer}>
      <h3 className={styles.reviewsListTitle}>Отзывы</h3>
      <ul>
        {reviews.length > 0 ? (
          reviews.map((item) => (
            <li key={item.id}>
              <p>
                <b>{item.user}</b>: {item.text}
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
