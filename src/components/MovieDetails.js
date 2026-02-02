import { Link, useParams } from "react-router-dom";
import "./style.css";

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  return (
    <div className="details-container">
      <h1>{movie.title}</h1>
      <p className="desc">{movie.description}</p>

      <iframe
        width="700"
        height="390"
        src={movie.trailer}
        title={movie.title}
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <Link to="/">
        <button className="btn back">⬅ Back Home</button>
      </Link>
    </div>
  );
};

export default MovieDetails;
