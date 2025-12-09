import { useContext, useState } from 'react';
import { Counter } from '../Counter/Counter';
import styles from './Dish.module.css';
import { UserContext } from '../../contexts/user-context';
import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dish/dishSlice';

const minValue = 0;
const maxValue = 5;

export default function Dish({ id }) {
  const [counter, setCounter] = useState(0);
  const { user } = useContext(UserContext);
  const { name, price } = useSelector((state) => selectDishById(state, id));
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
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
