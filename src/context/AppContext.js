import React, { useState, createContext } from 'react';

const AppContext = createContext();
const { Provider } = AppContext;

const AppProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const apiUrl = 'http://127.0.0.1:8000';
  
  return (
      <Provider value={{
        sidebarOpen,
        setSidebarOpen,
        apiUrl
      }}>
          { children }
      </Provider>
  );
}

export { AppContext, AppProvider };