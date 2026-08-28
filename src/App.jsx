import { useState } from "react";
import "./App.css";

import { CartContext, ThemeContext } from "./contexts/indexContext";
import Page from "./Page";

function App() {
  const [carts, setCarts] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <CartContext.Provider value={{ carts, setCarts }}>
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
          <Page />
        </ThemeContext.Provider>
      </CartContext.Provider>
    </>
  );
}

export default App;
