import React, { Component } from "react";
import StarRatings from "react-star-ratings";
import jp from "jsonpath";

class Movie extends Component {
  render() {
    const movieDetail = this.props.movieData;
    if (movieDetail.Response === "True") {
      const imdbStar = Math.round(movieDetail.imdbRating * 100) / 100;
      let metaCriticRating = "N/A";
      let rottenRating = "N/A";
      let imdbRatings = "N/A";

      if (
        jp
          .query(movieDetail.Ratings, "$..Source")
          .includes("Internet Movie Database")
      ) {
        imdbRatings = movieDetail.Ratings[0].Value;
      }
      if (
        jp.query(movieDetail.Ratings, "$..Source").includes("Rotten Tomatoes")
      ) {
        rottenRating = movieDetail.Ratings[1].Value;
      }
      if (jp.query(movieDetail.Ratings, "$..Source").includes("Metacritic")) {
        metaCriticRating = movieDetail.Ratings[2].Value;
      }

      const actors = movieDetail.Actors.split(",");
      const director = movieDetail.Director.split(",");
      const writers = movieDetail.Writer.split(",");
      const language = movieDetail.Language.split(",");
      const genre = movieDetail.Genre.split(",");
      return (
        <React.Fragment>
          <div className="card text-center">
            <div className="card-header">Your Search Result</div>
            <div className="card-body">
              <h2 className="card-title">
                {movieDetail.Title}({movieDetail.Year})
              </h2>
              <div className="plotText">{movieDetail.Plot}</div>
            </div>
            <div />
            <div className="row">
              <div className="col-sm-6">
                <div className="card">
                  <img
                    className="card-img moviePoster"
                    src={movieDetail.Poster}
                    alt={movieDetail.Poster}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <ul className="listStyle">
                      <strong> Actors:</strong>{" "}
                      {actors.map(actor => (
                        <li className="list-inline-item" key={actor}>
                          {actor}
                        </li>
                      ))}
                    </ul>
                    <ul className="listStyle">
                      <strong> Director:</strong>{" "}
                      {director.map(director => (
                        <li className="list-inline-item" key={director}>
                          {director}
                        </li>
                      ))}
                    </ul>
                    <ul className="listStyle">
                      <strong> Writers:</strong>{" "}
                      {writers.map(writers => (
                        <li className="list-inline-item" key={writers}>
                          {writers}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Details</h5>
                    <p className="card-text movieDetailBackground">
                      <strong>Rated</strong>: {movieDetail.Rated}
                    </p>
                    <p className="card-text movieDetailBackground">
                      <strong>Released</strong>: {movieDetail.Released}
                    </p>
                    <p className="card-text movieDetailBackground">
                      <strong>Runtime</strong>: {movieDetail.Runtime}
                    </p>
                    <p className="card-text movieDetailBackground">
                      <strong>Type</strong>: {movieDetail.Type}
                    </p>
                    <p className="card-text movieDetailBackground">
                      <strong>Awards</strong>: {movieDetail.Awards}
                    </p>
                    <ul className="listStyle">
                      <strong> Language:</strong>{" "}
                      {language.map(language => (
                        <li className="list-inline-item" key={language}>
                          {language}
                        </li>
                      ))}
                    </ul>
                    <ul className="listStyle">
                      <strong> Genre:</strong>{" "}
                      {genre.map(genre => (
                        <li className="list-inline-item" key={genre}>
                          {genre}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Popularity</h5>
                    <div className="card-text movieDetailBackground starRating">
                      <StarRatings
                        rating={imdbStar}
                        starDimension="20px"
                        starSpacing="0px"
                        starRatedColor="gold"
                        starHoverColor="yellow"
                        numberOfStars={10}
                      />
                    </div>
                    <p className="card-text movieDetailBackground ratings">
                      <strong>IMDB Rating</strong>: {imdbRatings}{" "}
                    </p>

                    <p className="card-text movieDetailBackground">
                      <strong>IMDB Votes </strong>: {movieDetail.imdbVotes}
                    </p>
                    <p className="card-text movieDetailBackground">
                      <strong>MetaCritic Ratings </strong>: {metaCriticRating}
                    </p>
                    <p className="card-text movieDetailBackground">
                      <strong>Rotten Tomatoes Ratings</strong>: {rottenRating}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer text-muted">Enjoy the Trivia!!</div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <div>
          <h5>Sorry we could not find that movie!!!</h5>
        </div>
      );
    }
  }
}
export default Movie;
