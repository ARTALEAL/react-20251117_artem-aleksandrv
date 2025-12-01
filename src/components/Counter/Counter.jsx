export const Counter = ({
  minValue,
  maxValue,
  increment,
  decrement,
  value,
  title,
  unit,
}) => {
  return (
    <div>
      <span>{title}: </span>
      <button type="button" disabled={value === minValue} onClick={decrement}>
        -
      </button>{' '}
      <span>{value}</span>{' '}
      <button type="button" onClick={increment} disabled={value === maxValue}>
        +
      </button>
      <span> {unit || ''}</span>
    </div>
  );
};
