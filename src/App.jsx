import { MainLayout } from './layouts/MainLayout';
import './App.css';
import { ThemeContextProvider } from './contexts/theme-context/ThemeContext';
import { UserContextProvider } from './contexts/user-context/UserContext';
import { Outlet } from 'react-router';

function App() {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <MainLayout>
          <Outlet />
        </MainLayout>
      </UserContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
