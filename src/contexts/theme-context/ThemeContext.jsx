import { useMemo, useState } from 'react';
import { ThemeContext } from '.';

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const value = useMemo(() => ({ theme, setTheme }), [theme]);
  return <ThemeContext value={value}>{children}</ThemeContext>;
}
