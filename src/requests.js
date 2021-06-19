const API_KEY = "c8db6c936183b6ea118c49955ea40321";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetcActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetcComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetcHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetcRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetcDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
