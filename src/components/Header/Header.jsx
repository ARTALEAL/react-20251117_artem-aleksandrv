import { useContext } from 'react';
import ScrollProgress from '../ScrollProgress/ScrollProgress';
import styles from './Header.module.css';
import { ThemeContext } from '../../contexts/theme-context';
import classNames from 'classnames';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';
import LoginButton from '../LoginButton/LoginButton';
import { NavLink } from 'react-router';

export default function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <header
      className={classNames({
        [styles.lightTheme]: theme === 'light',
        [styles.darkTheme]: theme === 'dark',
      })}
    >
      <ScrollProgress />
      <NavLink to="/">🏠</NavLink>
      <div className={styles.buttonContainer}>
        <ThemeToggleButton />
        <LoginButton />
      </div>
    </header>
  );
}
