import Button from '../Button/Button';

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
      <Button
        onClick={decrement}
        text={'-'}
        size={'l'}
        disabled={value === minValue}
      />{' '}
      <span>{value}</span>{' '}
      <Button
        onClick={increment}
        text={'+'}
        size={'l'}
        disabled={value === maxValue}
      />
      <span> {unit || ''}</span>
    </div>
  );
};
