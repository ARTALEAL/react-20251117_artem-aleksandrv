import { useState } from 'react';
import { Restaurant } from '../Restaurant/Restaurant';
import styles from './RestaurauntList.module.css';
import NavTab from '../navTab/NavTab';

export const RestaurantsList = ({ restaurantsIds = [] }) => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(
    restaurantsIds[0]
  );

  return (
    <>
      <nav>
        {restaurantsIds.length > 0 ? (
          <ul className={styles.restaurantsListContainer}>
            {restaurantsIds.map((id) => {
              return (
                <li key={id} className={styles.restaurantsListItem}>
                  <NavTab
                    id={id}
                    selectedRestaurantId={selectedRestaurantId}
                    handleSelect={(id) => setSelectedRestaurantId(id)}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <h2>Мы скоро обновим список ресторанов</h2>
        )}
      </nav>
      {selectedRestaurantId ? (
        <Restaurant currentRestaurant={selectedRestaurantId} />
      ) : (
        <h2>Выберите ресторан</h2>
      )}
    </>
  );
};
