import NavTab from '../NavTab/NavTab';
import styles from './navigation.module.css';

export default function Navigation({ data = [] }) {
  return (
    <nav>
      {data.length > 0 ? (
        <ul className={styles.navigationListContainer}>
          {data.map(({ id, name }) => {
            return (
              <li key={id} className={styles.navigationListItem}>
                <NavTab id={id} prefix="/restaurants" title={name} />
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
