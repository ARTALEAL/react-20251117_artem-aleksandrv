import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router';
import { selectDishById } from '../../redux/entities/dish/dishSlice';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user-context';
import { Counter } from '../../components/Counter/Counter';
import {
  addToCart,
  deleteFromCart,
  selectAmountById,
} from '../../redux/entities/cart/cartSlice';

const minValue = 0;
const maxValue = 5;

export default function DishPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { dishId } = useParams();
  const dishData = useSelector((state) => selectDishById(state, dishId));
  const { user } = useContext(UserContext);
  const counter = useSelector((state) => selectAmountById(state, dishId));

  const payload = {
    id: dishId,
    name: dishData.name,
    price: dishData.price,
    counter,
  };

  const increment = () => {
    dispatch(addToCart({ ...payload, counter: counter + 1 }));
  };

  const decrement = () => {
    dispatch(deleteFromCart({ ...payload, counter: counter - 1 }));
  };
  return (
    <>
      <h1>{dishData.name ? dishData.name : 'Нет данных'}</h1>
      <p>
        <b>Описание:</b> Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Exercitationem, deleniti dolorum enim fugiat distinctio autem ab
        qui asperiores praesentium, reiciendis nostrum ea ipsam, velit laborum
        quis et accusantium explicabo molestiae! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Facere nesciunt soluta illum facilis nemo
        aliquid quas mollitia provident laudantium ducimus modi accusantium
        consectetur cupiditate omnis beatae, quo placeat temporibus sed?
      </p>
      <span>Ингридиенты:</span>
      <ul>
        {dishData.ingredients?.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>Стоимость блюда: {dishData.price}$</p>
      {user && (
        <Counter
          increment={increment}
          decrement={decrement}
          value={counter}
          minValue={minValue}
          maxValue={maxValue}
          title={'Количество'}
          unit={'шт.'}
        />
      )}
      <br />
      <NavLink onClick={() => navigate(-1)}>Назад</NavLink>
    </>
  );
}
