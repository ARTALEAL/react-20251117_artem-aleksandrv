import styles from './Button.module.css';
import classNames from 'classnames';
export default function Button({
  onClick,
  disabled,
  type = 'button',
  size,
  text,
}) {
  const btnClass = classNames(styles.button, {
    [styles.button_s]: size === 's',
    [styles.button_m]: size === 'm',
    [styles.button_l]: size === 'l',
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
