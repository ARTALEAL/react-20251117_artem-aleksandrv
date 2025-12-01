import ReviewForm from '../ReviewForm/ReviewForm';

export default function ReviewsList({
  reviews = [],
  currentRestaurantId,
  restaurauntName,
}) {
  return (
    <div
      style={{
        border: '1px solid black',
        borderBottomRightRadius: '20px',
        borderBottomLeftRadius: '20px',
        padding: '10px',
        width: '50%',
      }}
    >
      <h3 style={{ textAlign: 'center' }}>Отзывы</h3>
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
