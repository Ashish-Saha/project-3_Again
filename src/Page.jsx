import { useContext } from "react";
import MovieList from "./cine/MovieList";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";
import { ThemeContext } from "./contexts/indexContext";

export default function Page() {
    const {darkMode} = useContext(ThemeContext)
  return (
    <div className={darkMode ? 'dark' : ""}>
      <Header />

      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <SideBar />
        <MovieList />
      </div>

      <Footer />
    </div>
  );
}
