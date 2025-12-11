import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../redux/entities/restauraunt/restaurauntSlice';
import Navigation from '../../components/Navigation/Navigation';
import { Outlet } from 'react-router';

export default function RestaurantsPage() {
  const restaurantsIds = useSelector(selectRestaurantIds);
  return (
    <>
      <h1>Рестораны</h1>
      <Navigation navItemsIds={restaurantsIds} />
      <Outlet />
    </>
  );
}
