import { useState } from "react";
import MovieCard from "./MovieCard";
import Filter from "./Filter";
import "./style.css";

const MovieList = ({ movies }) => {
  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState("");

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      (rateFilter ? movie.rating >= Number(rateFilter) : true)
  );

  return (
    <div className="container">
      <h1>🎬 My Movies</h1>

      <Filter setTitleFilter={setTitleFilter} setRateFilter={setRateFilter} />

      <div className="movie-grid">
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}

        {filteredMovies.length === 0 && <h3>No movies found 😢</h3>}
      </div>
    </div>
  );
};

export default MovieList;
