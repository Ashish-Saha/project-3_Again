import { useState } from "react";
import "./App.css";
import MovieList from "./cine/MovieList";
import { CartContext } from "./contexts/indexContext";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

function App() {
  const [carts, setCarts] = useState([]);
  return (
    <>
      <CartContext.Provider value={{ carts, setCarts }}>
        <Header />

        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
          <MovieList />
        </div>

        <Footer />
      </CartContext.Provider>
    </>
  );
}

export default App;
