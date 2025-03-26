import { useMode } from '../stores/EditModeConstext';
import { useTheme } from '../stores/ThemeContext'
import './EditButton.css';

const EditButton = () => {
  const { darkMode, } = useTheme();
  const { editMode, toggleMode } = useMode();

  return (
    <button 
      className={`edit-toggle-button btn ${darkMode ? 'btn-light text-dark' : 'btn-dark text-light'}`}
      onClick={toggleMode}
    >
      {editMode ? '✏️ Edit Mode' : '📖 Read Mode'}
    </button>
  );
};

export default EditButton;