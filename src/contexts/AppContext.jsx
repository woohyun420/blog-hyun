import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [diagnosisResult, setDiagnosisResult] = useState(null);

  const value = {
    diagnosisResult,
    setDiagnosisResult,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
