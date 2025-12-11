import { useSelector } from 'react-redux';
import MenuList from '../MenuList/MenuList';
import ReviewsList from '../ReviewsList/ReviewsList';
import { selectRestaurantById } from '../../redux/entities/restauraunt/restaurauntSlice';

export const Restaurant = ({ currentRestaurant }) => {
  const { menu, reviews, name, id } = useSelector((state) =>
    selectRestaurantById(state, currentRestaurant)
  );
  return (
    <>
      <h2>{name}</h2>
      <MenuList menu={menu} />
      <ReviewsList
        key={id}
        reviewsIds={reviews}
        currentRestaurantId={id}
        restaurauntName={name}
      />
    </>
  );
};
