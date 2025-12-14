import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restauraunt/restaurauntSlice';
import { Outlet, useNavigate, useParams } from 'react-router';
import NavTab from '../NavTab/NavTab';
import styles from './restaurant.module.css';
import { useEffect } from 'react';

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

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) {
    return <h2>Ресторан не найден</h2>;
  }
  return (
    <>
      <h2>{restaurant.name}</h2>
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
