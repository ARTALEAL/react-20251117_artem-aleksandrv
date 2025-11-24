import { Counter } from '../Counter/Counter';

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
          menu.map((item) => (
            <li
              key={item.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '5px',
              }}
            >
              {item.name} - {item.price} $ <Counter />
            </li>
          ))
        ) : (
          <li>Извините, меню ещё в разработке</li>
        )}
      </ul>
    </div>
  );
}
