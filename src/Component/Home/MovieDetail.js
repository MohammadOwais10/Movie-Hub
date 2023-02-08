import React, { useEffect, useState } from "react";
import "./MovieDetail.css";
import axios from "axios";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import InfoIcon from "@mui/icons-material/Info";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";

const MovieDetail = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    window.scroll(0, 0);
    getMovie();
  }, []);

  const getMovie = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b8fe7d3f8271bb8a8dd8d24789746121&language=en-US`
    );
    setMovie(data);
    setLoading(false);
    console.log(data);
  };
  return (
    <div>
      {loading === true ? (
        <Loader />
      ) : (
        <div className="movie-detail-container" key={movie.id}>
          <div>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                  : `https://via.placeholder.com/300x450`
              }
              alt={movie.title}
            />
          </div>
          <div className="movie-detail">
            <p className="movie-title">
              {movie.title ? movie.title : movie.name}
            </p>
            <p className="movie-tagline">{movie.tagline}</p>
            <div className="movie-info">
              <div className="movie-rating">
                {movie.vote_average > 0 ? (
                  <>
                    {movie.vote_average >= 2 ? (
                      <StarIcon />
                    ) : (
                      <StarBorderIcon />
                    )}
                    {movie.vote_average >= 4 ? (
                      <StarIcon />
                    ) : (
                      <StarBorderIcon />
                    )}
                    {movie.vote_average >= 6 ? (
                      <StarIcon />
                    ) : (
                      <StarBorderIcon />
                    )}
                    {movie.vote_average >= 8 ? (
                      <StarIcon />
                    ) : (
                      <StarBorderIcon />
                    )}
                    {movie.vote_average >= 10 ? (
                      <StarIcon />
                    ) : (
                      <StarBorderIcon />
                    )}
                  </>
                ) : (
                  <StarBorderIcon />
                )}
                <p>{movie.vote_average}</p>
              </div>
              <div className="movie-lang">
                {movie.original_language === "en" ? (
                  <div>
                    English / {movie.runtime} min /{" "}
                    {movie.release_date.substring(0, 4)}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="movie-genres">
              <p>Genres</p>
              <div className="movie-genre">
                {movie.genres
                  ? movie.genres.map((genre) => (
                      <div className="genre">
                        <InfoIcon fontSize="small" />
                        <p>{genre.name}</p>
                      </div>
                    ))
                  : ""}
              </div>
            </div>
            <div className="movie-overviews">
              <p>Overview</p>
              <p className="movie-overview">{movie.overview}</p>
            </div>
            <div>
              <Button
                style={{
                  background: "rgb(36 233 168",
                  border: "2px solid rgb(36 233 168",
                  color: "white",
                  fontWeight: "bold",
                  margin: "10px 10px 10px 0",
                }}
              >
                Watch now
              </Button>{" "}
              <Button
                style={{
                  color: "rgb(36 233 168",
                  border: "2px solid rgb(36 233 168",
                  fontWeight: "bold",
                  margin: "10px",
                }}
              >
                Watch Later
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
