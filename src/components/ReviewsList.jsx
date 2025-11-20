export default function ReviewsList({ review }) {
  return (
    <div
      style={{
        border: '1px solid black',
        borderRadius: '20px',
        padding: '15px',
      }}
    >
      <h3 style={{ textAlign: 'center' }}>Отзывы</h3>
      <ul>
        {review.map((item) => (
          <li key={item.id}>
            <p>
              <b>{item.user}</b>: {item.text}
            </p>
            <b>Оценка:</b> {item.rating}
          </li>
        ))}
      </ul>
    </div>
  );
}
