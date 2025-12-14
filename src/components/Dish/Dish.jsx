import { useContext } from 'react';
import styles from './Dish.module.css';
import { UserContext } from '../../contexts/user-context';
import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dish/dishSlice';
import { NavLink } from 'react-router';
import DishCounter from '../DishCounter/DishCounter';

export default function Dish({ id }) {
  const { user } = useContext(UserContext);
  const { name, price } = useSelector((state) => selectDishById(state, id));

  return (
    <li key={id} className={styles.dishContainer}>
      <NavLink to={`/dish/${id}`}>
        {name} - {price} ${' '}
      </NavLink>
      {user && <DishCounter id={id} />}
    </li>
  );
}
