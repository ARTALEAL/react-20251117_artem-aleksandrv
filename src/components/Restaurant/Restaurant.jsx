import { Outlet, useNavigate, useParams } from 'react-router';
import NavTab from '../NavTab/NavTab';
import styles from './restaurant.module.css';
import { useEffect } from 'react';
import { useGetRestaurantByIdQuery } from '../../redux/services/api';

export const Restaurant = () => {
  const { restaurantId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const currentPath = window.location.pathname;
    const isRestaurantRoot = currentPath === `/restaurants/${restaurantId}`;
    if (isRestaurantRoot) {
      navigate(`/restaurants/${restaurantId}/menu`, { replace: true });
    }
  }, [navigate, restaurantId]);

  const { data, isLoading, isError } = useGetRestaurantByIdQuery(restaurantId);

  if (isError) {
    return <h2>Ресторан не найден</h2>;
  }
  if (isLoading) {
    return <h2>Загрузка данных...</h2>;
  }
  return (
    <>
      <h2>{data.name}</h2>
      <div className={styles.navContainer}>
        <NavTab
          id={restaurantId}
          prefix="/restaurants"
          postfix="/menu"
          title="Меню"
        />
        <NavTab
          id={restaurantId}
          prefix="/restaurants"
          postfix="/reviews"
          title="Отзывы"
        />
      </div>
      <Outlet />
    </>
  );
};
