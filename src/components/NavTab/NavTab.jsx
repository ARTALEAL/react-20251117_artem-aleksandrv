import styles from './navTab.module.css';
import { NavLink } from 'react-router';
import classNames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';

export default function NavTab({
  id,
  prefix,
  postfix = '',
  title = 'Нет данных',
}) {
  const { theme } = useContext(ThemeContext);
  return (
    <NavLink
      className={({ isActive }) =>
        classNames(styles.navTab, {
          [styles.lightTheme]: theme === 'light',
          [styles.darkTheme]: theme === 'dark',
          [styles.navTabActive]: isActive,
        })
      }
      to={`${prefix}/${id}${postfix}`}
    >
      {title}
    </NavLink>
  );
}
