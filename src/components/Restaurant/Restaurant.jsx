import MenuList from '../MenuList/MenuList';
import ReviewsList from '../ReviewsList/ReviewsList';

export const Restaurant = ({ currentRestaurant }) => {
  const { menu, reviews, name } = currentRestaurant;
  return (
    <>
      <h2>{name}</h2>
      <MenuList menu={menu} />
      <ReviewsList reviews={reviews} />
    </>
  );
};
