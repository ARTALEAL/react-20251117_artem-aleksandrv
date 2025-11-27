import { useState } from 'react';
import { Counter } from '../Counter/Counter';

export default function MenuList({ menu = [] }) {
  const initDishCounter = () => {
    const initialCounter = {};
    for (let i = 0; i < menu.length; i++) {
      const menuPosition = menu[i].id;
      initialCounter[menuPosition] = 0;
    }
    return initialCounter;
  };
  const [dishCounter, setDishCounter] = useState(() => initDishCounter());

  const increment = (id) => {
    setDishCounter((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decrement = (id) => {
    setDishCounter((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) - 1,
    }));
  };

  return (
    <div
      style={{
        border: '1px solid black',
        padding: '10px',
        width: '50%',
        borderTopRightRadius: '20px',
        borderTopLeftRadius: '20px',
      }}
    >
      <h3 style={{ textAlign: 'center' }}>Меню</h3>
      <ul>
        {menu.length > 0 ? (
          menu.map(({ name, id, price }) => (
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
                value={dishCounter[id] || 0}
                minValue={0}
                maxValue={5}
                counterFor={id}
                title={'Количество'}
              />
            </li>
          ))
        ) : (
          <li>Извините, меню ещё в разработке</li>
        )}
      </ul>
    </div>
  );
}
