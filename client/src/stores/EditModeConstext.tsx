import { createContext, useContext, useState, ReactNode } from 'react';

interface EditModeContextType {
  editMode: boolean;
  toggleMode: () => void;
}

const EditModeContext = createContext<EditModeContextType | undefined>(undefined);

export const EditModeProvider = ({ children }: { children: ReactNode }) => {
  const [editMode, setEditMode] = useState(false);

  const toggleMode = () => {
    setEditMode((prevMode) => !prevMode);
  };

  return (
    <EditModeContext.Provider value={{ editMode, toggleMode }}>
      {children}
    </EditModeContext.Provider>
  );
};

export const useMode = () => {
  const context = useContext(EditModeContext);
  if (!context) {
    throw new Error('useMode must be used within an EditModeProvider');
  }
  return context;
};