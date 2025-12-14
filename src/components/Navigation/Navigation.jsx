import NavTab from '../NavTab/NavTab';
import styles from './navigation.module.css';

export default function Navigation({ navItemsIds = [] }) {
  return (
    <nav>
      {navItemsIds.length > 0 ? (
        <ul className={styles.navigationListContainer}>
          {navItemsIds.map((id) => {
            return (
              <li key={id} className={styles.navigationListItem}>
                <NavTab id={id} prefix="/restaurants" />
              </li>
            );
          })}
        </ul>
      ) : (
        <h2>Мы скоро обновим список ресторанов</h2>
      )}
    </nav>
  );
}
