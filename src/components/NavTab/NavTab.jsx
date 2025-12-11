import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restauraunt/restaurauntSlice';
import styles from './navTab.module.css';
import { NavLink } from 'react-router';
import classNames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';

export default function NavTab({ id, prefix, postfix = '', title }) {
  const { theme } = useContext(ThemeContext);
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? `${classNames([styles.navTabActive, styles.navTab], {
              [styles.lightTheme]: theme === 'light',
              [styles.darkTheme]: theme === 'dark',
            })}`
          : `${classNames([styles.navTab], {
              [styles.lightTheme]: theme === 'light',
              [styles.darkTheme]: theme === 'dark',
            })}`
      }
      to={`${prefix}/${id}${postfix}`}
    >
      {title ? title : restaurant?.name}
    </NavLink>
  );
}
