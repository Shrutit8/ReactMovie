import React from "react";
import homePoster from "../img/homePoster.jpg";

const Home = () => {
  return (
    <div className="container">
      <img
        className="card-img moviePoster"
        src={homePoster}
        alt="movieposter"
      />
    </div>
  );
};

export default Home;
