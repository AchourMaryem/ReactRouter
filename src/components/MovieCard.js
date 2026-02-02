import { Link } from "react-router-dom";
import "./style.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <img src={movie.posterURL} alt={movie.title} className="poster" />
      <h3>{movie.title}</h3>
      <p>⭐ {movie.rating}</p>

      <Link to={`/movie/${movie.id}`}>
        <button className="btn">View Details</button>
      </Link>
    </div>
  );
};

export default MovieCard;
