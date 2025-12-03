import Dish from '../Dish/Dish';
import styles from './MenuList.module.css';

export default function MenuList({ menu = [] }) {
  return (
    <div className={styles.menuListContainer}>
      <h3 className={styles.menuListTitle}>Меню</h3>
      <ul>
        {menu.length > 0 ? (
          menu.map(({ name, id, price }) => (
            <Dish key={id} name={name} id={id} price={price} />
          ))
        ) : (
          <li>Извините, меню ещё в разработке</li>
        )}
      </ul>
    </div>
  );
}
