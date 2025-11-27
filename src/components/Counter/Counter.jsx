export const Counter = ({
  minValue,
  maxValue,
  increment,
  decrement,
  value,
  counterFor,
  title,
  unit,
}) => {
  const handleDecrement = () => {
    if (value > minValue) {
      if (counterFor) {
        decrement(counterFor);
      } else {
        decrement();
      }
    }
  };
  const handleIncrement = () => {
    if (value < maxValue) {
      if (counterFor) {
        increment(counterFor);
      } else {
        increment();
      }
    }
  };
  return (
    <div>
      <span>{title}: </span>
      <button
        type="button"
        disabled={value === minValue}
        onClick={handleDecrement}
      >
        -
      </button>{' '}
      <span>{value}</span>{' '}
      <button
        type="button"
        onClick={handleIncrement}
        disabled={value === maxValue}
      >
        +
      </button>
      <span> {unit || ''}</span>
    </div>
  );
};
