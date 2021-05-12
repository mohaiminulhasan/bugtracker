import React, { useState, createContext } from 'react';

const AppContext = createContext();
const { Provider } = AppContext;

const AppProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
      <Provider value={{
        sidebarOpen,
        setSidebarOpen
      }}>
          { children }
      </Provider>
  );
}

export { AppContext, AppProvider };