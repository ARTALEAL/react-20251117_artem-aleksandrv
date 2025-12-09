import { useState } from 'react';
import { Restaurant } from '../Restaurant/Restaurant';
import styles from './RestaurauntList.module.css';
import { useSelector } from 'react-redux';
import {
  selectRestaurantById,
  selectRestaurants,
} from '../../redux/entities/restauraunt/restaurauntSlice';

export const RestaurantsList = ({ restaurantsIds = [] }) => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(
    restaurantsIds[0]
  );
  const restaurauntList = useSelector(selectRestaurants);

  const selectedRestaurant = useSelector((state) =>
    selectRestaurantById(state, selectedRestaurantId)
  );

  return (
    <>
      <nav>
        {restaurantsIds.length > 0 ? (
          <ul className={styles.restaurantsListContainer}>
            {restaurantsIds.map((id) => {
              return (
                <li key={id} className={styles.restaurantsListItem}>
                  <button
                    onClick={() => setSelectedRestaurantId(id)}
                    disabled={selectedRestaurantId === id}
                  >
                    {restaurauntList[id].name}
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
