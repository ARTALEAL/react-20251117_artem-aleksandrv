import Dish from '../Dish/Dish';

export default function MenuList({ menu = [] }) {
  return (
    <div
      style={{
        border: '1px solid black',
        padding: '10px',
        width: '50%',
        borderTopRightRadius: '20px',
        borderTopLeftRadius: '20px',
      }}
    >
      <h3 style={{ textAlign: 'center' }}>Меню</h3>
      <ul>
        {menu.length > 0 ? (
          menu.map(({ name, id, price }) => (
            <Dish key={id} name={name} id={id} price={price} />
          ))
        ) : (
          <li>Извините, меню ещё в разработке</li>
        )}
      </ul>
    </div>
  );
}
