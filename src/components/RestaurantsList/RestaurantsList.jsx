import { useState } from 'react';
import { Restaurant } from '../Restaurant/Restaurant';
import styles from './RestaurauntList.module.css';

export const RestaurantsList = ({ restaurants = [] }) => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(
    restaurants[0]?.id
  );

  const selectedRestaurant = restaurants.find(
    (restaurant) => restaurant.id === selectedRestaurantId
  );

  return (
    <>
      <nav>
        {restaurants.length > 0 ? (
          <ul className={styles.restaurantsListContainer}>
            {restaurants.map(({ id, name }, index) => {
              return (
                <li
                  key={id}
                  data-restourant-number={index}
                  className={styles.restaurantsListItem}
                >
                  <button
                    onClick={() => setSelectedRestaurantId(id)}
                    disabled={selectedRestaurantId === id}
                  >
                    {name}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <h2>Мы скоро обновим список ресторанов</h2>
        )}
      </nav>
      {selectedRestaurant ? (
        <Restaurant currentRestaurant={selectedRestaurant} />
      ) : (
        <h2>Выберите ресторан</h2>
      )}
    </>
  );
};
