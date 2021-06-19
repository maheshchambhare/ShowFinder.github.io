import React from "react";
import Row from "./Row";
import requests from "./requests";
import "./App.css";
import Banner from "./Banner";

export default function App() {
  return (
    <div className="app">
      <Banner />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetcActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetcComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetcHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetcRomanceMovies} />
      <Row title="Documentary Movies" fetchUrl={requests.fetcDocumentaries} />
    </div>
  );
}
