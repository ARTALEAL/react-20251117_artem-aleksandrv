import { useContext } from 'react';
import { Counter } from '../Counter/Counter';
import styles from './Dish.module.css';
import { UserContext } from '../../contexts/user-context';
import { useDispatch, useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dish/dishSlice';
import {
  addToCart,
  deleteFromCart,
  selectAmountById,
} from '../../redux/entities/cart/cartSlice';

const minValue = 0;
const maxValue = 5;

export default function Dish({ id }) {
  const dispatch = useDispatch();
  const { user } = useContext(UserContext);
  const { name, price } = useSelector((state) => selectDishById(state, id));
  const counter = useSelector((state) => selectAmountById(state, id));

  const payload = {
    id,
    name,
    price,
    counter,
  };

  const increment = () => {
    dispatch(addToCart({ ...payload, counter: counter + 1 }));
  };

  const decrement = () => {
    dispatch(deleteFromCart({ ...payload, counter: counter - 1 }));
  };

  return (
    <li key={id} className={styles.dishContainer}>
      {name} - {price} ${' '}
      {user && (
        <Counter
          increment={increment}
          decrement={decrement}
          value={counter}
          minValue={minValue}
          maxValue={maxValue}
          title={'Количество'}
          unit={'шт.'}
        />
      )}
    </li>
  );
}
