import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);
  function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "top center",
      }}
    >
      <div className="banner_content">
        <h1 className="title">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <div className="banner_btns">
          <button className="banner_btn">Play</button>
          <button className="banner_btn">My List</button>
        </div>
        <h1 className="banner_desc">{movie.overview}</h1>
      </div>
    </header>
  );
}

export default Banner;
