import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restauraunt/restaurauntSlice';

export default function NavTab({ id, handleSelect, selectedRestaurantId }) {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  return (
    <button
      onClick={() => handleSelect(id)}
      disabled={selectedRestaurantId === id}
    >
      {restaurant.name}
    </button>
  );
}
