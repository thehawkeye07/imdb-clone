import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.js";
import Home from "./components/pages/home/Home.js";
import MovieList from "./components/movieList/movieList.js";
import Movie from "./components/pages/movieDetail/Movie.js";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route index element={<Home />}></Route>
                    <Route path="movie/:id" element={<Movie />}></Route>
                    <Route path="movies/:type" element={<MovieList />}></Route>
                    <Route path="/*" element={<h1>Error Page</h1>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
