import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify"; 
import "./App.css";

import Page from "./Page";
import { CartContext, ThemeContext } from "./contexts/indexContext";
import { CartReducer, initialState } from "./reducers/cartReducer";

function App() {
  const [state, dispatch] = useReducer(CartReducer, initialState);
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <CartContext.Provider value={{ state, dispatch }}>
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
          <Page />
          <ToastContainer/>
        </ThemeContext.Provider>
      </CartContext.Provider>
    </>
  );
}

export default App;
