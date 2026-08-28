import { useReducer, useState } from "react";
import "./App.css";

import { CartContext, ThemeContext } from "./contexts/indexContext";
import Page from "./Page";
import { CartReducer, initialState } from "./reducers/cartReducer";

function App() {
  // const [carts, setCarts] = useState([]);
  const [state, dispatch] = useReducer(CartReducer, initialState)
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <CartContext.Provider value={{ state, dispatch }}>
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
          <Page />
        </ThemeContext.Provider>
      </CartContext.Provider>
    </>
  );
}

export default App;
