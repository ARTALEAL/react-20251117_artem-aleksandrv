import { useContext } from 'react';
import Button from '../Button/Button';
import { ThemeContext } from '../../contexts/theme-context';

export default function ThemeToggleButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <Button
      text={theme === 'light' ? 'Going Dark 🌕' : 'Going Light 🌞'}
      onClick={toggleTheme}
      size="l"
    />
  );
}
