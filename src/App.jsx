import { MainLayout } from './layouts/MainLayout';
import { restaurants } from './constants';
import './App.css';
import { RestaurantsList } from './components/RestaurantsList/RestaurantsList';
import { ThemeContextProvider } from './contexts/theme-context/ThemeContext';
import { UserContextProvider } from './contexts/user-context/UserContext';

function App() {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <MainLayout>
          <RestaurantsList restaurants={restaurants} />
        </MainLayout>
      </UserContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
