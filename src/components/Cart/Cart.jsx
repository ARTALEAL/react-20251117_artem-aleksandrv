import { useSelector } from 'react-redux';
import styles from './Cart.module.css';
import {
  selectCartItems,
  selectTotalSum,
} from '../../redux/entities/cart/cartSlice';

export default function Cart() {
  const items = useSelector(selectCartItems);
  const totalSum = useSelector(selectTotalSum);
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Корзина 🛒</h3>
      {items.length ? (
        <>
          <ul>
            {items.map((item) => {
              return (
                <li key={item.id}>
                  {item.name} - {item.amount} шт --- {item.total} $
                </li>
              );
            })}
          </ul>
          <p>Итого: {totalSum} $</p>
        </>
      ) : (
        <span>Корзина пустая</span>
      )}
    </div>
  );
}
