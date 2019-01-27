import React, { Component } from "react";

class MovieFeature extends Component {
  render() {
    const movieDataFeature = this.props.movieData;
    return (
      <div className="featureContent">
        <h2 className="card-title text-center">
          {movieDataFeature.Title}- ({movieDataFeature.Year})
        </h2>

        <div className="row">
          <div className="col-md-4">
            <img
              className="card-img"
              src={movieDataFeature.Poster}
              alt={movieDataFeature.Title}
            />
          </div>

          <div className="col-md-8">
            <ul className="list-group border-white text-center">
              <li className="list-group-item border-0 ">
                <strong>Released:</strong> {movieDataFeature.Released}
              </li>
              <li className="list-group-item border-0">
                <strong>Rated:</strong> {movieDataFeature.Rated}
              </li>
              <li className="list-group-item border-0">
                <strong>IMDB Rating:</strong> {movieDataFeature.imdbRating}
              </li>
              <li className="list-group-item border-0">
                <strong>Awards:</strong> {movieDataFeature.Awards}
              </li>
            </ul>
            <br />

            <div className="text-center">
              <p className="text-center font-italic">{movieDataFeature.Plot}</p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieFeature;
