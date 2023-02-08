import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <Link
        to={`/movie/${movie.id}`}
        key={movie.id}
        style={{ textDecoration: "none" }}
      >
        <div className="movie" key={movie.id}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                : `https://via.placeholder.com/300x450`
            }
            alt={movie.title}
          />
          <p>{movie.title ? movie.title : movie.name}</p>
          <h3>Play now</h3>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
