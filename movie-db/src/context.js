import React, { useState, useContext, useEffect } from 'react';

export const API_ENPOINT = ``;
const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [query, setQuery] = useState('batman');
  
  return (
    <AppContext.Provider>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };