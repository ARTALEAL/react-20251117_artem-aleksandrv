import { useContext } from 'react';
import Header from '../components/Header/Header';
import styles from './MainLayout.module.css';
import { ThemeContext } from '../contexts/theme-context';
import classNames from 'classnames';

export const MainLayout = ({ children }) => {
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
