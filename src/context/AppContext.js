import React, { useState, createContext } from 'react';
import { useHistory } from 'react-router-dom';

const AppContext = createContext();
const { Provider } = AppContext;

const AppProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  return (
      <Provider value={{
        sidebarOpen
      }}>
          { children }
      </Provider>
  );
}

export { AppContext, AppProvider };