import MenuList from '../MenuList/MenuList';
import ReviewsList from '../ReviewsList/ReviewsList';

export const Restourant = ({ currentRestraunt }) => {
  const { menu, reviews, name } = currentRestraunt;
  return (
    <>
      <h2>{name}</h2>
      <MenuList menu={menu} />
      <ReviewsList reviews={reviews} />
    </>
  );
};
