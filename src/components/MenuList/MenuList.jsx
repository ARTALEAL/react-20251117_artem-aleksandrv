import { useParams } from 'react-router';
import Dish from '../Dish/Dish';
import styles from './MenuList.module.css';
import { useGetDishesByRestaurauntIdQuery } from '../../redux/services/api';

export default function MenuList() {
  const { restaurantId } = useParams();

  const { data, isLoading, isError } =
    useGetDishesByRestaurauntIdQuery(restaurantId);
  if (isLoading) {
    return (
      <div className={styles.menuListContainer}>
        <h3 className={styles.menuListTitle}>Меню</h3>
        <ul>
          <li>Загрузка данных...</li>
        </ul>
      </div>
    );
  }
  if (isError) {
    return (
      <div className={styles.menuListContainer}>
        <h3 className={styles.menuListTitle}>Меню</h3>
        <ul>
          <li>Упс, какая-то ошибка...</li>
        </ul>
      </div>
    );
  }
  return (
    <div className={styles.menuListContainer}>
      <h3 className={styles.menuListTitle}>Меню</h3>
      <ul>
        {data.map(({ id }) => (
          <Dish key={id} id={id} />
        ))}
      </ul>
    </div>
  );
}
