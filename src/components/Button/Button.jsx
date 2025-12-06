import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import styles from './Button.module.css';
import classNames from 'classnames';
export default function Button({
  onClick,
  disabled,
  type = 'button',
  size,
  text,
}) {
  const { theme } = useContext(ThemeContext);

  const btnClass = classNames(styles.button, {
    [styles.button_s]: size === 's',
    [styles.button_m]: size === 'm',
    [styles.button_l]: size === 'l',
    [styles.lightTheme]: theme === 'light',
    [styles.darkTheme]: theme === 'dark',
  });
  return (
    <button
      className={btnClass}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
