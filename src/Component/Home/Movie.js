import { useState, useEffect } from "react";
import "./Movie.css";
import axios from "axios";
import MovieCard from "./MovieCard";
import Loader from "../Loader/Loader";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b8fe7d3f8271bb8a8dd8d24789746121"
    );
    setMovies(data.results);
    setLoading(false);
    console.log(data);
  };

  return (
    <div>
      <div className="movies-container">
        <div className="movies-all">
          <div className="movies">
            {loading === true ? (
              <Loader />
            ) : (
              movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
