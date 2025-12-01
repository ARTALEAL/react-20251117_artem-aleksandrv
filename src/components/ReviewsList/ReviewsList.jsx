import ReviewForm from '../ReviewForm/ReviewForm';
import styles from './ReviewsList.module.css';
import classNames from 'classnames';

export default function ReviewsList({
  reviews = [],
  currentRestaurantId,
  restaurauntName,
}) {
  return (
    <div className={classNames(styles['reviews-list-container'])}>
      <h3 className={classNames(styles['reviews-list-title'])}>Отзывы</h3>
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
