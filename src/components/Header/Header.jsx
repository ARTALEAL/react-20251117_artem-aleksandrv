import { useContext } from 'react';
import Button from '../Button/Button';
import ScrollProgress from '../ScrollProgress/ScrollProgress';
import styles from './Header.module.css';
import { ThemeContext } from '../../contexts/theme-context';
import classNames from 'classnames';
import { UserContext } from '../../contexts/user-context';
export default function Header({ title }) {
  const { theme, setTheme } = useContext(ThemeContext);
  const { user, setUser } = useContext(UserContext);

  const toggleUser = () => {
    if (user) {
      setUser(null);
    } else {
      setUser('Таррар');
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header
      className={classNames({
        [styles.lightTheme]: theme === 'light',
        [styles.darkTheme]: theme === 'dark',
      })}
    >
      <ScrollProgress />
      <div className={styles.buttonContainer}>
        <Button
          text={theme === 'light' ? 'Going Dark 🌕' : 'Going Light 🌞'}
          onClick={toggleTheme}
          size="l"
        />
        <Button
          text={user ? `${user}: выйти` : 'Войти'}
          onClick={toggleUser}
          size="l"
        />
      </div>
      <h1 className={styles.headerTitle}>{title}</h1>
    </header>
  );
}
