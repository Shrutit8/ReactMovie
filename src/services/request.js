import axios from "axios";

const fetchMovieDetail = (query, plot = "full") => {
  return axios.get(
    `http://www.omdbapi.com/?apikey=6c3a2d45&t=${query}&plot=${plot}`
  );
};

export default fetchMovieDetail;
