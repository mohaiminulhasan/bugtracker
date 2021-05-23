import React, { useState, createContext } from 'react';

const AppContext = createContext();
const { Provider } = AppContext;

const AppProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const apiUrl = window.location.hostname === 'localhost' ? 'http://127.0.0.1:8000' : 'https://minigunnr.pythonanywhere.com';
  
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