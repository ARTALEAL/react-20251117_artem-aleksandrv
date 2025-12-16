import { useParams } from 'react-router';
import Dish from '../Dish/Dish';
import styles from './MenuList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getDishes } from '../../redux/entities/dish/getDishes';
import {
  selectDishIds,
  selectRequestStatus,
} from '../../redux/entities/dish/dishSlice';
import { useEffect } from 'react';
import { IDLE } from '../../utils/constants';

export default function MenuList() {
  const { restaurantId } = useParams();
  const loadingStatus = useSelector(selectRequestStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDishes(restaurantId));
  }, [dispatch, restaurantId]);
  const dishes = useSelector(selectDishIds);

  if (loadingStatus == IDLE || !dishes.length) {
    return (
      <div className={styles.menuListContainer}>
        <h3 className={styles.menuListTitle}>Меню</h3>
        <ul>
          <li>Загрузка данных...</li>
        </ul>
      </div>
    );
  }
  return (
    <div className={styles.menuListContainer}>
      <h3 className={styles.menuListTitle}>Меню</h3>
      <ul>
        {dishes.map((id) => (
          <Dish key={id} id={id} />
        ))}
      </ul>
    </div>
  );
}
