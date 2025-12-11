import { MainLayout } from './layouts/MainLayout';
import './App.css';
import { RestaurantsList } from './components/RestaurantsList/RestaurantsList';
import { ThemeContextProvider } from './contexts/theme-context/ThemeContext';
import { UserContextProvider } from './contexts/user-context/UserContext';
import { useSelector } from 'react-redux';
import { selectRestaurantIds } from './redux/entities/restauraunt/restaurauntSlice';

function App() {
  const restaurauntsIds = useSelector(selectRestaurantIds);
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <MainLayout>
          <RestaurantsList restaurantsIds={restaurauntsIds} />
        </MainLayout>
      </UserContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
