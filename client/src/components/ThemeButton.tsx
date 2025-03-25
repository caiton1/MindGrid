import { useTheme } from '../stores/ThemeContext';
import './ThemeButton.css';

const ThemeButton = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button 
      className={`theme-toggle-button btn ${darkMode ? 'btn-light text-dark' : 'btn-dark text-light'}`}
      onClick={toggleTheme}
    >
      {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ThemeButton;