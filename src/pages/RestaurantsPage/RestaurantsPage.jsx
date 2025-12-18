import Navigation from '../../components/Navigation/Navigation';
import { Outlet } from 'react-router';
import { useGetRestrauntsQuery } from '../../redux/services/api';
import { useDispatch } from 'react-redux';
import { setRestaurantsList } from '../../redux/entities/restauraunt/restaurauntSlice';
import { useEffect } from 'react';

export default function RestaurantsPage() {
  const { data, isLoading, isError } = useGetRestrauntsQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setRestaurantsList(data));
    }
  }, [data, dispatch]);

  if (isLoading) {
    return (
      <>
        <h1>Рестораны</h1>
        <p>Идёт загрузка...</p>
      </>
    );
  }
  if (isError) {
    <>
      <h1>Рестораны</h1>
      <p>Что-то пошло не так, попробуйте позже повторить запрос</p>
    </>;
  }
  return (
    <>
      <h1>Рестораны</h1>
      <Navigation data={data} />
      <Outlet />
    </>
  );
}
