import Header from "./components/Header";
import Banner from "./components/Banner";
import MovieList from "./components/MovieList";

function App() {
  return (
    <>
      <div className="bg-black pb-20">
        <Header />
        <Banner />
        <MovieList title={"Phim Hot"} />
        <MovieList title={"Phim Đề Cử"} />
      </div>
    </>
  );
}

export default App;
