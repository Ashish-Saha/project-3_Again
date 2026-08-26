import "./App.css";
import MovieList from "./cine/MovieList";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

function App() {
  return (
    <>
      <Header />

      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <SideBar />
        <MovieList />
      </div>

      <Footer/>
    </>
  );
}

export default App;
