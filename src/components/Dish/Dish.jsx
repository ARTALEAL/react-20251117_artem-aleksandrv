import { useContext, useState } from 'react';
import { Counter } from '../Counter/Counter';
import styles from './Dish.module.css';
import { UserContext } from '../../contexts/user-context';

const minValue = 0;
const maxValue = 5;

export default function Dish({ id, name, price }) {
  const [counter, setCounter] = useState(0);
  const { user } = useContext(UserContext);
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
