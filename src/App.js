import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import { movies } from "./moviesData";
import { useState } from "react";

function App() {
  const [data] = useState(movies);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList movies={data} />} />
        <Route path="/movie/:id" element={<MovieDetails movies={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
