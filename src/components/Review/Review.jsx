import { useContext } from 'react';
import { useGetUsersQuery } from '../../redux/services/api';
import User from '../User/User';
import { UserContext } from '../../contexts/user-context';

export default function Review({ userId, reviewId, text, rating, handleEdit }) {
  const { data, isLoading, isError } = useGetUsersQuery();
  const { user } = useContext(UserContext);
  const userData = data?.find(({ id }) => id === userId);
  if (isLoading) {
    return (
      <li>
        <p>Загрузка...</p>
      </li>
    );
  }
  if (isError) {
    return (
      <li>
        <p>Упс, какая-то ошибка...</p>
      </li>
    );
  }
  return (
    <li>
      <p>
        <User user={userData?.name} />: {text}
      </p>
      <b>Оценка:</b> {rating}
      <br />
      {userId === user?.id && (
        <button onClick={() => handleEdit(reviewId, text, rating)}>
          Edit review
        </button>
      )}
    </li>
  );
}
