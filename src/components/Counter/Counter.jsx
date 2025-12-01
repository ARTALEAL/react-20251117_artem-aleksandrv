import styles from './Counter.module.css';
import classNames from 'classnames';

export const Counter = ({
  minValue,
  maxValue,
  increment,
  decrement,
  value,
  title,
  unit,
  size,
}) => {
  const btnClass = classNames(styles.button, {
    [styles.button_s]: size === 's',
    [styles.button_m]: size === 'm',
    [styles.button_l]: size === 'l',
  });
  return (
    <div>
      <span>{title}: </span>
      <button
        className={btnClass}
        type="button"
        disabled={value === minValue}
        onClick={decrement}
      >
        -
      </button>{' '}
      <span>{value}</span>{' '}
      <button
        className={btnClass}
        type="button"
        onClick={increment}
        disabled={value === maxValue}
      >
        +
      </button>
      <span> {unit || ''}</span>
    </div>
  );
};
