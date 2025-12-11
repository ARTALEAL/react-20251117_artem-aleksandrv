import { useContext } from 'react';
import Header from '../components/Header/Header';
import styles from './MainLayout.module.css';
import { ThemeContext } from '../contexts/theme-context';
import classNames from 'classnames';
import Cart from '../components/Cart/Cart';
import { UserContext } from '../contexts/user-context';

export const MainLayout = ({ children }) => {
  const { user } = useContext(UserContext);
  const date = new Date();
  const year = date.getFullYear();
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Header title={'Рестораны'} />
      <main
        className={classNames({
          [styles.lightTheme]: theme === 'light',
          [styles.darkTheme]: theme === 'dark',
        })}
      >
        {children}
        {user && <Cart />}
      </main>
      <footer
        className={classNames({
          [styles.lightTheme]: theme === 'light',
          [styles.darkTheme]: theme === 'dark',
        })}
      >
        <span>{year}</span>
      </footer>
    </>
  );
};
