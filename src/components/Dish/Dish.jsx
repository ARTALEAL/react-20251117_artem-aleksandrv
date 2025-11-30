import { useState } from 'react';
import { Counter } from '../Counter/Counter';

const minValue = 0;
const maxValue = 5;

export default function Dish({ id, name, price }) {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <li
      key={id}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '5px',
      }}
    >
      {name} - {price} ${' '}
      <Counter
        increment={increment}
        decrement={decrement}
        value={counter}
        minValue={minValue}
        maxValue={maxValue}
        title={'Количество'}
      />
    </li>
  );
}
