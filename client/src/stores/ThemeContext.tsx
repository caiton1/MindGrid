import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  useEffect(() => {
    // Apply the default theme classes on initial load
    if (darkMode) {
      document.body.classList.add('bg-dark', 'text-light');
      document.body.classList.remove('bg-light', 'text-dark');
    } else {
      document.body.classList.add('bg-light', 'text-dark');
      document.body.classList.remove('bg-dark', 'text-light');
    }
  }, [darkMode]); // Run this effect whenever darkMode changes

  const toggleTheme = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;

      // Add or remove Bootstrap theme classes
      if (newMode) {
        document.body.classList.add('bg-dark', 'text-light'); // Bootstrap dark theme classes
        document.body.classList.remove('bg-light', 'text-dark'); // Remove light theme classes
      } else {
        document.body.classList.add('bg-light', 'text-dark'); // Bootstrap light theme classes
        document.body.classList.remove('bg-dark', 'text-light'); // Remove dark theme classes
      }

      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};