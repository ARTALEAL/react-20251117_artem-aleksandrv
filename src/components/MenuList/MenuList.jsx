import Dish from '../Dish/Dish';
import styles from './MenuList.module.css';
import classNames from 'classnames';

export default function MenuList({ menu = [] }) {
  return (
    <div className={classNames(styles['menu-list-container'])}>
      <h3 className={classNames(styles['menu-list-title'])}>Меню</h3>
      <ul>
        {menu.length > 0 ? (
          menu.map(({ name, id, price }) => (
            <Dish key={id} name={name} id={id} price={price} />
          ))
        ) : (
          <li>Извините, меню ещё в разработке</li>
        )}
      </ul>
    </div>
  );
}
