import { MainLayout } from './layouts/MainLayout';
import { restaurants } from './constants';
import './App.css';
import { RestaurantsList } from './components/RestaurantsList/RestaurantsList';

function App() {
  return (
    <MainLayout>
      <RestaurantsList restaurants={restaurants} />
    </MainLayout>
  );
}

export default App;
