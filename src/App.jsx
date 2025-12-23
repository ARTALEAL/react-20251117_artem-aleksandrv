import { MainLayout } from './layouts/MainLayout';
import './App.css';
import { ThemeContextProvider } from './contexts/theme-context/ThemeContext';
import { UserContextProvider } from './contexts/user-context/UserContext';
import { Outlet } from 'react-router';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <ThemeContextProvider>
        <UserContextProvider>
          <MainLayout>
            <Outlet />
          </MainLayout>
        </UserContextProvider>
      </ThemeContextProvider>
    </ErrorBoundary>
  );
}

export default App;
