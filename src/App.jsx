import { restaurants } from './constants';
import MenuList from './components/MenuList';
import ReviewsList from './components/ReviewsList';
import './App.css';

function App() {
  return (
    <main>
      <h1>Рестораны</h1>
      <ul className="restaurants-list">
        {restaurants.map((restourant) => (
          <li key={restourant.id}>
            <h2>{restourant.name}</h2>
            <MenuList menu={restourant.menu} />
            <hr />
            <ReviewsList review={restourant.reviews} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
