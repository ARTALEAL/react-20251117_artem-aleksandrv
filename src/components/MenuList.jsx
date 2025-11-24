export default function MenuList({ menu }) {
  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      <h3 style={{ textAlign: 'center' }}>Меню</h3>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price} $
          </li>
        ))}
      </ul>
    </div>
  );
}
