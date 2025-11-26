import MenuList from '../MenuList/MenuList';
import ReviewsList from '../ReviewsList/ReviewsList';

export const Restourant = ({ currentRestoraunt }) => {
  const { menu, reviews, name } = currentRestoraunt;
  return (
    <>
      <h2>{name}</h2>
      <MenuList menu={menu} />
      <ReviewsList reviews={reviews} />
    </>
  );
};
