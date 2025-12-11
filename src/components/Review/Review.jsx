import { useSelector } from 'react-redux';
import User from '../User/User';
import { selectReviewById } from '../../redux/entities/review/reviewSlice';

export default function Review({ reviewId }) {
  const review = useSelector((state) => selectReviewById(state, reviewId));
  return (
    <li>
      <p>
        <User userId={review.userId} />: {review.text}
      </p>
      <b>Оценка:</b> {review.rating}
    </li>
  );
}
