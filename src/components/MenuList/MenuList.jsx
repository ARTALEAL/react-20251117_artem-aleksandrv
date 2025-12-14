import { useParams } from 'react-router';
import Dish from '../Dish/Dish';
import styles from './MenuList.module.css';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restauraunt/restaurauntSlice';

export default function MenuList() {
  const { restaurantId } = useParams();

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  const menu = restaurant.menu;

  return (
    <div className={styles.menuListContainer}>
      <h3 className={styles.menuListTitle}>Меню</h3>
      <ul>
        {menu.length > 0 ? (
          menu.map((id) => <Dish key={id} id={id} />)
        ) : (
          <li>Извините, меню ещё в разработке</li>
        )}
      </ul>
    </div>
  );
}
