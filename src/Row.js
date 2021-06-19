import React, { useState, useEffect } from "react";
import axios from "./axios";
import ScrollContainer from "react-indiana-drag-scroll";
import "./row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

export default function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, SetTrailerUrl] = useState("");

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      SetTrailerUrl("");
    } else {
      movieTrailer(movie.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          SetTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <ScrollContainer className="scroll-container">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row_posterLarge"}`}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </ScrollContainer>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}
