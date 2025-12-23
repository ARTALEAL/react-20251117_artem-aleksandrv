import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  deleteFromCart,
  selectAmountById,
} from '../../redux/entities/cart/cartSlice';
import { Counter } from '../Counter/Counter';

const minValue = 0;
const maxValue = 5;
export default function DishCounter({ id, name, price }) {
  const counter = useSelector((state) => selectAmountById(state, id));
  const dispatch = useDispatch();

  const payload = {
    id,
    name,
    price,
    counter,
  };

  const increment = () => {
    dispatch(addToCart({ ...payload, counter: counter + 1 }));
  };

  const decrement = () => {
    dispatch(deleteFromCart({ ...payload, counter: counter - 1 }));
  };
  return (
    <Counter
      increment={increment}
      decrement={decrement}
      value={counter}
      minValue={minValue}
      maxValue={maxValue}
      title={'Количество'}
      unit={'шт.'}
    />
  );
}
