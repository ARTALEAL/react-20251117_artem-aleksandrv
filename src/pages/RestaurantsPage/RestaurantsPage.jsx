import { useSelector } from 'react-redux';
import {
  selectRequestStatus,
  selectRestaurantIds,
} from '../../redux/entities/restauraunt/restaurauntSlice';
import Navigation from '../../components/Navigation/Navigation';
import { Outlet } from 'react-router';
import { useThunk } from '../../redux/hooks/useThunk';
import { getRestaurants } from '../../redux/entities/restauraunt/getRestaurants';
import { IDLE, PENDING, REJECTED } from '../../utils/constants';

export default function RestaurantsPage() {
  useThunk(getRestaurants);
  const loadingStatus = useSelector(selectRequestStatus);
  const restaurantsIds = useSelector(selectRestaurantIds);

  if (loadingStatus === IDLE || loadingStatus === PENDING) {
    return (
      <>
        <h1>Рестораны</h1>
        <p>Идёт загрузка...</p>
      </>
    );
  }
  if (loadingStatus === REJECTED) {
    <>
      <h1>Рестораны</h1>
      <p>Что-то пошло не так, попробуйте позже повторить запрос</p>
    </>;
  }
  return (
    <>
      <h1>Рестораны</h1>
      <Navigation navItemsIds={restaurantsIds} />
      <Outlet />
    </>
  );
}
