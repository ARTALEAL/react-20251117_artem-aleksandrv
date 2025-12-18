import { useContext } from 'react';
import styles from './Dish.module.css';
import { UserContext } from '../../contexts/user-context';
import { NavLink } from 'react-router';
import DishCounter from '../DishCounter/DishCounter';
import { useGetDishByIdQuery } from '../../redux/services/api';

export default function Dish({ id }) {
  const { user } = useContext(UserContext);
  const { data, isLoading, isError } = useGetDishByIdQuery(id);

  if (isLoading) {
    return (
      <li key={id} className={styles.dishContainer}>
        Загрузка информации...
      </li>
    );
  }

  if (isError) {
    return (
      <li key={id} className={styles.dishContainer}>
        Упс, что-то пошло не так...
      </li>
    );
  }

  return (
    <li key={id} className={styles.dishContainer}>
      <NavLink to={`/dish/${id}`}>
        {data.name} - {data.price} ${' '}
      </NavLink>
      {user && <DishCounter id={id} name={data.name} price={data.price} />}
    </li>
  );
}
